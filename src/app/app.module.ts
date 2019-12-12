import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeeklyProgramComponent } from './WeeklyPrograms/weekly-program/weekly-program.component';
import { DailyProgramListComponent } from './WeeklyPrograms/daily-program-list/daily-program-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DailyProgramItemWorkoutComponent } from './WeeklyPrograms/daily-program-item-workout/daily-program-item-workout.component';
import { DailyProgramItemMealComponent } from './WeeklyPrograms/daily-program-item-meal/daily-program-item-meal.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyProgramComponent,
    DailyProgramListComponent,
    
    DailyProgramItemWorkoutComponent,
    DailyProgramItemMealComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
