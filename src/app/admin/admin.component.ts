import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContractService } from '../shared/contract/contract.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigItem } from '../shared/app-config/config-item';
import { IGame } from '../shared/game/game';
import { ScheduleService } from '../shared/schedule/schedule.service';
import { PickService } from '../shared/picks/pick.service';
import { IPicksEntry, IWinningEntry } from '../shared/picks/picks-entry';
import { Schedule } from '../shared/schedule/schedule';
import { GameType, GameTypeData, getLabelFromType } from '../shared/game-type/game-type';
import { takeWhile } from 'rxjs/operators';
import { AppConfig } from '../shared/app-config/app-config';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
	contractReady = false;
	contractReadyMsg = 'Getting FiddyFiddy ready...';
	adminForm: FormGroup;
	config: AppConfig;
	configItemList: ConfigItem[];
	weeklySchedule: Schedule;
	showMasterKeyTable: boolean;
	showFinalScoresTable: boolean;
	weeklyPicksEntries: IPicksEntry[];
	masterKey: IPicksEntry;
	winningEntries: IWinningEntry[] = [];
	winningEntriesAdded: number;
	gameTypeData: GameTypeData;
	gameTypes = GameType;
	scoresAdded = false;
	TOTAL_WEEKS = 21;
	weekNumbers: number[] = [];
	componentActive = true;

	constructor(
		private _fb: FormBuilder,
		private _snackBar: MatSnackBar,
		private _contractService: ContractService,
		private _scheduleService: ScheduleService,
		private _pickService: PickService
	) {
		this.createForm();
	}

	ngOnInit() {
		this._contractService.getContract()
			.then(() => {
				this.setWeekNumbers();
				this.getAppConfig();
			})
			.catch(() => {
				this.contractReadyMsg = 'Ruh roh... FiddyFiddy failed.';
			});
	}

	ngOnDestroy() {
		this.componentActive = false;
	}

	createForm(): void {
		this.adminForm = this._fb.group({
			weekNumber: 0,
			contractLocked: false,
			setMasterKey: false,
			admin: '',
			stakeholder: '',
			founder: ''
		});
	}

	setWeekNumbers(): void {
		for (let i = 1; i <= this.TOTAL_WEEKS; i++) {
			this.weekNumbers.push(i);
		}
	}

	getAppConfig(): void {
		this._contractService.getAppConfig()
			.then((appConfig: AppConfig) => {
				this.config = appConfig;
				this.getGames(this.config.weekNumber);
				this.setForm(this.config);
			})
			.catch((error: any) => {
				this.displayError(error.toString());
			});
	}

	setForm(config: AppConfig) {
		this.adminForm.patchValue({
			weekNumber: config.weekNumber,
			contractLocked: config.contractLocked,
			admin: config.admin,
			stakeholder: config.stakeholder,
			founder: config.founder
		});
	}

	getGames(weekNumber: number): void {
		this._scheduleService.getThisWeeksGames(weekNumber)
			.pipe(takeWhile(() => this.componentActive))
			.subscribe(
				// TODO: check if needs to be data[0], can it just be data???
				(data: any) => this.weeklySchedule = data[0],
				(error: any) => this.displayError(error.toString())
			);
	}

	setMasterKey(picks: number[]): void {
		this.masterKey = {
			weekNumber: this.config.weekNumber,
			player: this.config.admin,
			picks
		};
	}

	updateScheduleWithScores(games: IGame[]): void {
		Object.assign(this.weeklySchedule, { games });
		this._scheduleService.updateGameData(this.config.weekNumber, this.weeklySchedule)
			.pipe(takeWhile(() => this.componentActive))
			.subscribe(
				(data: any) => {
					this.scoresAdded = true;
					this.displaySuccess(data.message);
				},
				(error: any) => this.displayError(`updateScheduleWithScores [error]: ${error.toString()}`)
			);
	}

	determineWinnersOfGameType(gameType: GameType): void {
		this.gameTypeData = new GameTypeData(gameType);
		/* Get all of the posted picks for that Game Type in that week */
		this._pickService.getPicksForGameType(this.config.weekNumber, gameType)
			.pipe(takeWhile(() => this.componentActive))
			.subscribe(
				(data: IPicksEntry[]) => {
					this.weeklyPicksEntries = data;
					this.updateWeeklyPicksEntries(this.weeklyPicksEntries);
					const winningPicksEntries: IPicksEntry[] = this.calculateWinner(this.weeklyPicksEntries);
					this.postWinnersToTheBlockchain(winningPicksEntries);
				},
				(error: any) => this.displayError(`getWeeklyEntries [error]: ${error.toString()}`)
			);
	}

	calculateWinner(weeklyPicksEntries: IPicksEntry[]): IPicksEntry[] {
		let leadingEntries: IPicksEntry[] = [];
		let mostCorrect = 0;

		weeklyPicksEntries.forEach((pickEntry: IPicksEntry) => {
			let correctPicks = 0;
			pickEntry.picks.forEach((pick: number, i: number) => {
				if (this.masterKey.picks[i] === pick) {
					++correctPicks;
				}
			});

			if (correctPicks === mostCorrect) {
				leadingEntries.push(pickEntry);
			} else if (correctPicks > mostCorrect) {
				mostCorrect = correctPicks;
				leadingEntries = Array.of(pickEntry);
			}

			Object.assign(pickEntry, { numberCorrect: correctPicks });
		});

		const winningPicksEntries: IPicksEntry[] = leadingEntries.length > 1
			? this.checkMondayNightPicks(leadingEntries)
			: leadingEntries;

		return winningPicksEntries;
	}

	postWinnersToTheBlockchain(pickEntries: IPicksEntry[]): void {
		// Create an IWinningEntry for each IPicksEntry
		const winners: IWinningEntry[] = this.getWinningEntryFromPicksEntry(pickEntries);
		let winningEntryCount = 0;

		// Post winners to the blockchain one at a time
		winners.forEach((entry: IWinningEntry) => {
			this._contractService.addWinningEntry(entry)
				.then((successful: boolean) => {
					winningEntryCount++;
					this.winningEntries.push(entry);
					if (winningEntryCount === winners.length) {
						this.displaySuccess('Winning entries have been posted to the blockchain.');
					}
				})
				.catch((error: any) => {
					this.displayError(`postWinnersToTheBlockchain [error]: ${error.toString()}`);
				});
		});
	}

	getWinningEntryFromPicksEntry(pickEntries: IPicksEntry[]): IWinningEntry[] {
		const winningEntries: IWinningEntry[] = pickEntries.map((entry: IPicksEntry) => {
			return {
				weekNumber: entry.weekNumber,
				gameType: getLabelFromType(entry.gameType),
				player: entry.player,
				evm_picks: entry.evm_picks,
				numberCorrect: entry.numberCorrect
			};
		});

		return winningEntries;
	}

	checkMondayNightPicks(leadingEntries: IPicksEntry[]): IPicksEntry[] {
		const picksLength = this.masterKey.picks.length;
		const exactScore: number = this.masterKey.picks[picksLength - 1];

		/* Check the total score differential of each leadingEntry against the one before it and return
		   the lesser or equal of the two, until only the winning entries remains. Those are the winners! */
		let previousScore = 0;
		const winningEntries: IPicksEntry[] = leadingEntries.reduce((previous, current) => {
			previousScore = previous.length ? previous[0].picks[picksLength - 1] : 0;
			const currentScore: number = current.picks[picksLength - 1];
			const prevScoreDiff: number = Math.abs(previousScore - exactScore);
			const currScoreDiff: number = Math.abs(currentScore - exactScore);

			if (currScoreDiff < prevScoreDiff) {
				return Array.of(current);
			} else if (currScoreDiff === prevScoreDiff) {
				return previous.concat(current);
			}
			return previous;
		}, []);

		return winningEntries;
	}

	updateWeeklyPicksEntries(weeklyPicksEntries: IPicksEntry[]): void {
		this._pickService.updatePicks(weeklyPicksEntries)
			.subscribe(
				(data: any) => this.displaySuccess(`updateWeeklyPicksEntries [SUCCESS]: ${data.toString()}`),
				(error: any) => this.displayError(error.toString())
			);
	}

	setAppConfig(): void {
		this._contractService.setAppConfig(this.config)
			.then((transactionComplete: boolean) => {
				if (transactionComplete) {
					// Sanity check - form field values should match updated values following app config get request
					this.getAppConfig();
					this.onSetAppConfigSuccess();
				} else {
					this.displayError('Setting app config was not successful');
				}
			})
			.catch((error: any) => {
				this.displayError(error.toString());
			});
	}

	onSetAppConfigSuccess(): void {
		let successMsg = 'AppConfig is updated';
		this.configItemList.forEach((item, index) => {
			successMsg += `${item.label}: ${item.value}`;
			if (index + 1 !== this.configItemList.length) {
				successMsg += ', ';
			}
		});

		this.displaySuccess(successMsg);
		this.clearConfigItemsList();
	}

	listConfigItems(): any {
		Object.assign(this.config, {
			weekNumber: this.adminForm.get('weekNumber').value,
			contractLocked: this.adminForm.get('contractLocked').value,
			admin: this.adminForm.get('admin').value,
			stakeholder: this.adminForm.get('stakeholder').value,
			founder: this.adminForm.get('founder').value
		});
		this.configItemList = Array.of(
			{
				label: 'Week #',
				value: this.config.weekNumber
			},
			{
				label: 'Contract Locked',
				value: this.config.contractLocked
			},
			{
				label: 'Admin address',
				value: this.config.admin
			},
			{
				label: 'Stakeholder address',
				value: this.config.stakeholder
			},
			{
				label: 'Founder address',
				value: this.config.founder
			},
			{
				label: 'Scores Added',
				value: this.scoresAdded
			},
			{
				label: 'Master Key set',
				value: typeof this.masterKey === 'object'
			}
		);
	}

	clearConfigItemsList(): void {
		this.configItemList = null;
	}

	toggleMasterKeyTable(checked: boolean) {
		this.showMasterKeyTable = checked;
	}

	toggleFinalScoresTable(event: MatCheckboxChange) {
		this.showFinalScoresTable = event.checked;
	}

	payoutEarnings() {
		this._contractService.payoutWinnings(this.config.weekNumber, this.gameTypeData.gameType)
			.then((payoutSuccessful: boolean) => {
				if (payoutSuccessful) {
					this.displaySuccess(`${this.gameTypeData.label} Payouts for Week ${this.config.weekNumber} are complete.`);
				} else {
					this.displayError(`Oh no! ${this.gameTypeData.label} Payouts ` +
						`for Week ${this.config.weekNumber} were not successful. ` +
						`The function completed on the blockchain, however.`
					);
				}
			})
			.catch((error: any) => {
				this.displayError(error.toString());
			});
	}

	displaySuccess(successMsg: string): void {
		this._snackBar.open(successMsg, '', {
			duration: 5000,
			panelClass: 'bg-primary'
		});
	}

	displayError(errorMsg: string): void {
		this._snackBar.open(errorMsg, '', {
			duration: 5000,
			panelClass: 'bg-danger'
		});
	}
}
