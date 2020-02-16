import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: 'make-picks',
		loadChildren: () => import('./players-picks/players-picks.module').then(m => m.PlayersPicksModule)
	},
	{
		path: 'view-entries',
		loadChildren: () => import('./view-entries/view-entries.module').then(m => m.ViewEntriesModule)
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
	},
	{
		path: '',
		loadChildren: () => import('./read-me/read-me.module').then(m => m.ReadMeModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
