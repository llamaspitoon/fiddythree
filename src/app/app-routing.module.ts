import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: 'make-picks',
		loadChildren: './players-picks/players-picks.module#PlayersPicksModule'
	},
	{
		path: 'view-entries',
		loadChildren: './view-entries/view-entries.module#ViewEntriesModule'
	},
	{
		path: 'admin',
		loadChildren: './admin/admin.module#AdminModule'
	},
	{
		path: '',
		loadChildren: './read-me/read-me.module#ReadMeModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
