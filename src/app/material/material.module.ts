import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
