import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		HeaderComponent,
		LayoutComponent
	],
	exports: [
		LayoutComponent
	]
})
export class LayoutModule { }