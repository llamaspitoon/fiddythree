import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersPicksRoutingModule } from './players-picks-routing.module';
import { PlayersPicksComponent } from './players-picks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		PlayersPicksRoutingModule
	],
	declarations: [PlayersPicksComponent]
})
export class PlayersPicksModule { }
