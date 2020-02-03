import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetaModule } from './meta/meta.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { PlayersPicksComponent } from './players-picks/players-picks.component';
import { ViewEntriesComponent } from './view-entries/view-entries.component';

@NgModule({
	declarations: [
		AppComponent,
		PlayersPicksComponent,
		ViewEntriesComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		AppRoutingModule,
		LayoutModule,
		MetaModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
