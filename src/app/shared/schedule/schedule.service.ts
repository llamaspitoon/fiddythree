import { Schedule } from './schedule';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ScheduleService {

	constructor(
		private _http: HttpClient
	) { }

	getThisWeeksGames(weekNumber: number): Observable<Schedule> {
		const url = `api/schedule/${weekNumber}`;
		return this._http.get<Schedule>(url);
	}

	updateGameData(weekNumber: number, weeklySchedule: Schedule): Observable<any> {
		const url = `api/schedule/${weekNumber}`;
		return this._http.put<Schedule>(url, weeklySchedule);
	}
}
