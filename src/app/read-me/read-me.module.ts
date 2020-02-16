import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMeComponent } from './read-me.component';
import { ReadMeRoutingModule } from './read-me-routing.module';



@NgModule({
	declarations: [ReadMeComponent],
	imports: [
		CommonModule,
		ReadMeRoutingModule
	]
})
export class ReadMeModule { }
