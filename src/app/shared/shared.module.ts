import { PicksTableComponent } from './picks-table/picks-table.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
	declarations: [
		PicksTableComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		MaterialModule
	],
	exports: [
		ReactiveFormsModule,
		MaterialModule,
		PicksTableComponent
	]
})
export class SharedModule { }
