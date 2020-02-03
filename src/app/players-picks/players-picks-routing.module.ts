import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersPicksComponent } from './players-picks.component';

const routes: Routes = [
	{
		path: '',
		component: PlayersPicksComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PlayersPicksRoutingModule { }
