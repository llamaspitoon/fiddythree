import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEntriesComponent } from '@app/view-entries/view-entries.component';

const routes: Routes = [
	{
		path: ':weekNumber/:gameType',
		component: ViewEntriesComponent
	},
	{
		path: '',
		component: ViewEntriesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewEntriesRoutingModule { }
