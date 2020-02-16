import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEntriesComponent } from './view-entries.component';


const routes: Routes = [
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
