import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEntriesRoutingModule } from './view-entries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewEntriesComponent } from './view-entries.component';


@NgModule({
	declarations: [ViewEntriesComponent],
	imports: [
		CommonModule,
		SharedModule,
		ViewEntriesRoutingModule
	]
})
export class ViewEntriesModule { }
