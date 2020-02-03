import { GameType, GameTypeData } from '../shared/game-type/game-type';
import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../shared/schedule/schedule.service';
import { IGame } from '../shared/game/game';
import { MatSnackBar } from '@angular/material';
import { ContractService } from '../shared/contract/contract.service';
import { AppConfig } from '../shared/app-config/app-config';
import { PickService } from '../shared/picks/pick.service';
import { IPicksEntry } from '../shared/picks/picks-entry';
import { Schedule } from '../shared/schedule/schedule';
import { Router } from '@angular/router';

@Component({
	selector: 'app-players-picks',
	templateUrl: './players-picks.component.html',
	styleUrls: ['./players-picks.component.scss']
})
export class PlayersPicksComponent implements OnInit {
	config: AppConfig;
	address: string;
	greeting: string;
	games: IGame[];
	picksEntry: IPicksEntry;
	weeklySchedule: Schedule;
	gameTypeData: GameTypeData;
	gameTypes = GameType;

	constructor(
		private _scheduleService: ScheduleService,
		private _contractService: ContractService,
		private _pickService: PickService,
		private _snackBar: MatSnackBar,
		private _router: Router
	) { }

	ngOnInit() {
		this.getAppConfig();
	}

	getUserInfo(): void {
		this._contractService.getUserInfo()
			.then((userInfo: any) => {
				this.address = userInfo.userAddress;
				this.greeting = this.address;
				this.picksEntry = this.createPicksEntry();
			})
			.catch((error: any) => {
				this.greeting = 'you need to sign in to MetaMask';
				this.displayError(error.toString());
			});
	}

	getAppConfig(): void {
		this._contractService.getAppConfig()
			.then((appConfig: AppConfig) => {
				if (appConfig) {
					this.config = appConfig;
					this.getGames(this.config.weekNumber);
					this.getUserInfo();
				} else {
					this.displayError('There was an error retrieving some app details');
				}
			})
			.catch((error: any) => {
				this.displayError(error.toString());
			});
	}

	getGames(weekNumber: number): void {
		this._scheduleService.getThisWeeksGames(weekNumber)
			.subscribe(
				(data: any) => {
					this.weeklySchedule = data[0];
					this.games = this.weeklySchedule.games;
				},
				(error: any) => this.displayError(error.toString())
			);
	}

	createPicksEntry(): IPicksEntry {
		return {
			weekNumber: this.config.weekNumber,
			gameType: undefined,
			player: this.address,
			picks: [],
			evm_picks: undefined,
			numberCorrect: 0
		};
	}

	setGameTypeData(gameType: GameType) {
		this.gameTypeData = new GameTypeData(gameType);
		this.picksEntry.gameType = gameType;
	}

	postPicksToBlockchain(picks: number[]): void {
		if (this.gameTypeData) {
			this._contractService.postPicks(this.config.weekNumber, picks, this.gameTypeData)
				.then((evm_picks: string) => {
					if (evm_picks) {
						Object.assign(this.picksEntry, {
							player: this.address,
							picks,
							evm_picks
						});
						this.displaySuccess('Your picks are posted to the blockchain');
						this.postPicksToDB(this.picksEntry);
					}
				})
				.catch((error: any) => {
					const errMsg = `Ruh roh! Something went wrong. Here\'s more info: ${error.toString()}`;
					this.displayError(errMsg);
				});
		} else {
			this.displayError('You forgot to pick your game type');
		}
	}

	postPicksToDB(picksEntry: IPicksEntry): void {
		this._pickService.postPicks(picksEntry)
			.subscribe(
				(data: any) => {
					this.updateTeamsPickedPerGame(picksEntry);
				},
				(error: any) => console.error(`postPicksToDB [error]: ${error.toString()}`)
			);
	}

	updateTeamsPickedPerGame(picksEntry: IPicksEntry) {
		const picks: number[] = picksEntry.picks;
		this.games.forEach((game: IGame, index: number) => {
			if (picks.includes(game.home.team.team_id)) {
				this.games[index].home.instancesChosen++;
			} else if (picks.includes(game.away.team.team_id)) {
				this.games[index].away.instancesChosen++;
			}
		});

		Object.assign(this.weeklySchedule, { games: this.games });
		this._scheduleService.updateGameData(this.config.weekNumber, this.weeklySchedule)
			.subscribe(
				(data: any) => this._router.navigate([`/view-entries/${this.config.weekNumber}/${this.gameTypeData.gameType}`]),
				(error: any) => console.error(`updateTeamsPickedPerGame [error]: ${error.toString()}`)
			);
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
