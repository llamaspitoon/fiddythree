import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatCardModule,
	MatRadioModule,
	MatSnackBarModule,
	MatButtonModule,
	MatIconModule,
	MatSelectModule,
	MatFormFieldModule,
	MatCheckboxModule,
	MatDividerModule,
	MatInputModule,
	MatBadgeModule,
	MatProgressBarModule,
	MatButtonToggleModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		MatCardModule,
		MatRadioModule,
		MatSnackBarModule,
		MatButtonModule,
		MatIconModule,
		MatSelectModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatDividerModule,
		MatInputModule,
		MatBadgeModule,
		MatProgressBarModule,
		MatButtonToggleModule
	]
})
export class MaterialModule { }
