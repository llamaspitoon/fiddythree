import { MatSnackBar } from '@angular/material';
import { IGame } from '@app/shared/game/game';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
	selector: 'app-picks-table',
	templateUrl: './picks-table.component.html',
	styleUrls: ['./picks-table.component.scss']
})
export class PicksTableComponent implements OnInit {
	@Input() weekNumber: number;
	@Input() games: IGame[];
	@Output() submitPicksRequest = new EventEmitter<number[]>();
	picksGroup: FormGroup;

	constructor(
		private _formBuilder: FormBuilder,
		private _snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.initForm();
	}

	initForm(): void {
		this.picksGroup = this._formBuilder.group({
			picksControls: this._formBuilder.array([]),
			mondayScore: undefined
		});

		this.createPicksControlsArray(this.games.length);
	}

	get picksControls() {
		return this.picksGroup.get('picksControls') as FormArray;
	}

	createPicksControlsArray(gameCount: number): void {
		for (let i = 0; i < gameCount; i++) {
			this.picksControls.push(this._formBuilder.control(''));
		}
	}

	mapFormToPicksEntry(): void {
		if (this.picksGroup.valid) {
			const stringPicks: string[] = Array.of(...this.picksControls.value, this.picksGroup.get('mondayScore').value);
			const numberPicks: number[] = stringPicks.map((pick: string) => parseInt(pick, 10));
			this.submitPicksRequest.emit(numberPicks);
		} else {
			this.displayError('You are missing some picks');
		}
	}

	displayError(errorMsg: string): void {
		this._snackBar.open(errorMsg, '', {
			duration: 5000,
			panelClass: 'bg-danger'
		});
	}

}
