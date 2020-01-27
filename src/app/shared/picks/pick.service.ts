import { GameType } from '@app/shared/game-type/game-type';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPicksEntry } from '@app/shared/picks/picks-entry';

@Injectable({
	providedIn: 'root'
})
export class PickService {

	constructor(
		private _http: HttpClient
	) { }

	postPicks(picksEntry: IPicksEntry): Observable<IPicksEntry> {
		const url = 'api/picks';
		return this._http.post<IPicksEntry>(url, picksEntry);
	}

	getPicks(weekNumber: number): Observable<IPicksEntry[]> {
		const url = `api/picks/${weekNumber}`;
		return this._http.get<IPicksEntry[]>(url);
	}

	getPicksForPlayer(weekNumber: number, player: string): Observable<IPicksEntry[]> {
		const url = `api/picks/${weekNumber}/${player}`;
		return this._http.get<IPicksEntry[]>(url);
	}

	getPicksForGameType(weekNumber: number, gameType?: GameType): Observable<IPicksEntry[]> {
		const url = `api/picks/${weekNumber}/${gameType}`;
		return this._http.get<IPicksEntry[]>(url);
	}

	updatePicks(weeklyPicksEntries: IPicksEntry[]): Observable<IPicksEntry[]> {
		const url = `api/picks`;
		return this._http.put<IPicksEntry[]>(url, weeklyPicksEntries);
	}
}
