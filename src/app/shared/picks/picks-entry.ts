import { GameType } from '../game-type/game-type';

export interface IPicksEntry {
	_id?: string;
	weekNumber: number;
	player: string;
	gameType?: GameType;
	picks: number[];
	evm_picks?: string;
	numberCorrect?: number;
}

export interface IWinningEntry {
	weekNumber: number;
	player: string;
	evm_picks: string;
	gameType: string;
	numberCorrect: number;
}

export interface IWeeklyPicksEntries {
	fun: IPicksEntry[];
	funner: IPicksEntry[];
	baller: IPicksEntry[];
}
