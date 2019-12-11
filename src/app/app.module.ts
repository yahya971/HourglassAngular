import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeeklyProgramComponent } from './WeeklyPrograms/weekly-program/weekly-program.component';
import { DailyProgramListComponent } from './WeeklyPrograms/daily-program-list/daily-program-list.component';
import { DailyProgramItemComponent } from './WeeklyPrograms/daily-program-item/daily-program-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyProgramComponent,
    DailyProgramListComponent,
    DailyProgramItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
