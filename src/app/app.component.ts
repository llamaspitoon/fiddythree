import { Component, OnInit } from '@angular/core';
import { ContractService } from './shared/contract/contract.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public appReady = false;

	constructor(
		private contractService: ContractService,
		private snackbar: MatSnackBar
	) {}

	ngOnInit() {
		this.contractService.resolveContract()
			.then((contractReady: boolean) => {
				this.appReady = contractReady;
			})
			.catch((error: any) => {
				this.displayError(error.toString());
			});
	}

	displayError(errorMsg: string): void {
		const snackbarRef = this.snackbar.open(errorMsg, 'Close', {
			duration: 5000,
			panelClass: 'bg-danger'
		});

		snackbarRef.onAction()
			.pipe(take(1))
			.subscribe(_ => snackbarRef.dismiss());
	}
}
