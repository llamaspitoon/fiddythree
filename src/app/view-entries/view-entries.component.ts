import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PickService } from '@app/shared/picks/pick.service';
import { ContractService } from '@app/shared/contract/contract.service';
import { ScheduleService } from '@app/shared/schedule/schedule.service';
import { AppConfig } from '@app/shared/app-config/app-config';
import { IGame, IGameTeam } from '@app/shared/game/game';
import { IPicksEntry, IWeeklyPicksEntries } from '@app/shared/picks/picks-entry';
import { GameType } from '@app/shared/game-type/game-type';

@Component({
	selector: 'app-view-entries',
	templateUrl: './view-entries.component.html',
	styleUrls: ['./view-entries.component.scss']
})
export class ViewEntriesComponent implements OnInit {
	config: AppConfig;
	player: string;
	games: IGame[];
	gameTypes = GameType;
	activeGameType: GameType;
	playerEntries: IWeeklyPicksEntries;
	activeGameTypePlayerEntries: IPicksEntry[];
	activeEntry: IPicksEntry;
	activeEntryMondayScore: number;
	actualMondayScore: number;

	constructor(
		private _scheduleService: ScheduleService,
		private _contractService: ContractService,
		private _pickService: PickService,
		private _snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.getAppConfig();
	}

	getAppConfig(): void {
		this._contractService.getAppConfig()
			.then((appConfig: AppConfig) => {
				if (appConfig) {
					this.config = appConfig;
					this.getUserInfo();
					this.getGames(this.config.weekNumber);
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
					this.games = this.setOverallPickPercentages(data[0].games);
					this.actualMondayScore = this.getActualMondayScore(this.games[this.games.length - 1]);
				},
				(error: any) => this.displayError(error.toString())
			);
	}

	getUserInfo(): void {
		this._contractService.getUserInfo()
			.then((userInfo: any) => {
				this.player = userInfo.userAddress;
				this.getWeeklyPicksEntries(this.player);
			})
			.catch((error: any) => {
				const errorMessage = 'You need to sign in to MetaMask see we can fetch your entry.';
				this.displayError(errorMessage);
			});
	}

	getWeeklyPicksEntries(player: string): void {
		this._pickService.getPicksForPlayer(this.config.weekNumber, player)
			.subscribe(
				(data: IPicksEntry[]) => {
					this.playerEntries = this.setPlayerEntries(data);
					this.activeGameType = this.setActiveGameType(this.playerEntries);
					this.updateActiveGameTypeProperties(this.playerEntries, this.activeGameType);
				},
				(error: any) => this.displayError(`getWeeklyEntries [error]: ${error.toString()}`)
			);
	}

	setActiveGameTypePlayerEntries(playerEntries: IWeeklyPicksEntries, activeGameType: GameType): IPicksEntry[] {
		switch (activeGameType) {
			case GameType.Fun:
				return playerEntries.fun;
			case GameType.Funner:
				return playerEntries.funner;
			case GameType.Baller:
				return playerEntries.baller;
		}
	}

	setActiveEntryProperties(activeEntryElect: IPicksEntry): void {
		this.activeEntry = activeEntryElect;
		this.activeEntryMondayScore = activeEntryElect.picks[activeEntryElect.picks.length - 1];
	}

	updateActiveGameType(gameType: GameType) {
		this.activeGameType = gameType;
		this.updateActiveGameTypeProperties(this.playerEntries, this.activeGameType);
	}

	updateActiveGameTypeProperties(playerEntries: IWeeklyPicksEntries, gameType: GameType) {
		this.activeGameTypePlayerEntries = this.setActiveGameTypePlayerEntries(playerEntries, gameType);

		if (this.activeGameTypePlayerEntries.length > 0) {
			this.setActiveEntryProperties(this.activeGameTypePlayerEntries[0]);
		} else {
			this.activeEntry = null;
			this.activeEntryMondayScore = null;
		}
	}

	playerHasEntries(playerEntries: IWeeklyPicksEntries): boolean {
		return playerEntries.fun.length > 0
			|| playerEntries.funner.length > 0
			|| playerEntries.baller.length > 0;
	}

	setActiveGameType(playerEntries: IWeeklyPicksEntries): GameType {
		if (this.playerHasEntries(playerEntries)) {
			if (playerEntries.baller.length > 0) {
				return GameType.Baller;
			} else if (playerEntries.funner.length > 0) {
				return GameType.Funner;
			} else {
				return GameType.Fun;
			}
		} else {
			return GameType.Fun;
		}
	}

	setPlayerEntries(entries: IPicksEntry[]): IWeeklyPicksEntries {
		const funEntries: IPicksEntry[] = [];
		const funnerEntries: IPicksEntry[] = [];
		const ballerEntries: IPicksEntry[] = [];

		entries.forEach(entry => {
			switch (entry.gameType) {
				case GameType.Fun:
					funEntries.push(entry);
					break;
				case GameType.Funner:
					funnerEntries.push(entry);
					break;
				case GameType.Baller:
					ballerEntries.push(entry);
			}
		});

		return {
			fun: funEntries,
			funner: funnerEntries,
			baller: ballerEntries
		};
	}

	updateActiveEntry(entryId: string): void {
		const activeEntryElect: IPicksEntry = this.activeGameTypePlayerEntries.find(e => e._id === entryId);
		this.setActiveEntryProperties(activeEntryElect);
	}

	setOverallPickPercentages(games: IGame[]): IGame[] {
		const gamesWithPickPct: IGame[] = games.map((game: IGame) => {
			const homePicks: number = game.home.instancesChosen;
			const awayPicks: number = game.away.instancesChosen;
			const homeChosenPercentage = Math.round(homePicks / (homePicks + awayPicks) * 100);
			Object.assign(game, { homeChosenPercentage });
			return game;
		});
		return gamesWithPickPct;
	}

	getActualMondayScore(mondayGame: IGame): number {
		return mondayGame.away.score + mondayGame.home.score;
	}

	getTeamClass(index: number, locale: string, teamId: number): string {
		if (this.activeEntry) {
			const thisTeam: IGameTeam = locale === 'away'
				? this.games[index].away
				: this.games[index].home;
			const otherTeam: IGameTeam = locale === 'home'
				? this.games[index].away
				: this.games[index].home;

			if (thisTeam.score > otherTeam.score) {
				if (this.activeEntry.picks.includes(thisTeam.team.team_id)) {
					return 'ff-correct-pick ff-winning-team';
				} else {
					return 'ff-winning-team';
				}
			} else if (thisTeam.score < otherTeam.score) {
				if (this.activeEntry.picks.includes(thisTeam.team.team_id)) {
					return 'ff-incorrect-pick';
				}
			} else if (thisTeam.score === otherTeam.score && locale === 'away') {
				const tiePick: number = parseInt(this.games[index].away.team.team_id.toString() + this.games[index].home.team.team_id.toString(), 10);
				if (this.activeEntry.picks.includes(tiePick)) {
					return 'ff-correct-pick ff-winning-team';
				} else {
					return 'ff-incorrect-pick ff-winning-team';
				}
			}

			return (thisTeam.score > otherTeam.score || thisTeam.score === otherTeam.score) ? 'ff-no-icon ff-winning-team' : 'ff-no-icon';
		} else {
			return 'ff-no-icon';
		}
	}

	displayError(errorMsg: string): void {
		this._snackBar.open(errorMsg, '', {
			duration: 5000,
			panelClass: 'bg-danger'
		});
	}

}
