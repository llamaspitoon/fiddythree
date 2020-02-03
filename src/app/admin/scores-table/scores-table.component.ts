import { IGame, IGameTeam } from './../../shared/game/game';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
	selector: 'app-scores-table',
	templateUrl: './scores-table.component.html',
	styleUrls: ['./scores-table.component.scss']
})
export class ScoresTableComponent implements OnInit {
	@Input() weekNumber: number;
	@Input() games: IGame[];
	@Output() submitScoresRequest = new EventEmitter<IGame[]>();
	scoresGroup: FormGroup;

	constructor(
		private _formBuilder: FormBuilder,
		private _snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.initForm();
	}

	initForm(): void {
		this.scoresGroup = this._formBuilder.group({
			scoresControls: this._formBuilder.array([])
		});

		this.createScoresControlsArray(this.games);
	}

	get scoresControls() {
		return this.scoresGroup.get('scoresControls') as FormArray;
	}

	createScoresControlsArray(games: IGame[]): void {
		games.forEach((game: IGame) => {
			const gameScoreGroup = this._formBuilder.group({
				_id: game._id,
				away: this._formBuilder.group({
					name: game.away.team.name,
					team_id: game.away.team.team_id,
					score: ['', Validators.required]
				}),
				home: this._formBuilder.group({
					name: game.home.team.name,
					team_id: game.home.team.team_id,
					score: ['', Validators.required]
				})
			});
			this.scoresControls.push(gameScoreGroup);
		});
	}

	addScoreToControl(index: number, locale: string, score: string) {
		const thisScoreControl = this.scoresControls.controls[index];
		if (locale === 'away') {
			thisScoreControl.get('away.score').setValue(parseInt(score, 10));
		} else {
			thisScoreControl.get('home.score').setValue(parseInt(score, 10));
		}
	}

	mapFormToScoresEntry(): void {
		if (this.scoresGroup.valid) {
			const gamesWithScores: IGame[] = this.games.map((game: IGame) => {
				const matchingControl = this.scoresControls.controls.find(control => control.value._id === game._id);
				if (typeof matchingControl !== 'undefined') {
					// add the score to the home and away team
					const homeTeam: IGameTeam = { ...game.home, score: matchingControl.value.home.score };
					const awayTeam: IGameTeam = { ...game.away, score: matchingControl.value.away.score };
					Object.assign(game, {
						away: awayTeam,
						home: homeTeam
					});
				}
				// if no match for matching control, just return the game back anyway (no change)
				return game;
			});

			this.submitScoresRequest.emit(this.games);
		} else {
			this.displayError('You are missing some scores');
		}
	}

	displayError(errorMsg: string): void {
		this._snackBar.open(errorMsg, '', {
			duration: 5000,
			panelClass: 'bg-danger'
		});
	}

}
