import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeeklyProgramComponent } from './programmeDuJour/WeeklyPrograms/weekly-program/weekly-program.component';
import { DailyProgramListComponent } from './programmeDuJour/WeeklyPrograms/daily-program-list/daily-program-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DailyProgramItemWorkoutComponent } from './programmeDuJour/WeeklyPrograms/daily-program-item-workout/daily-program-item-workout.component';
import { DailyProgramItemMealComponent } from './programmeDuJour/WeeklyPrograms/daily-program-item-meal/daily-program-item-meal.component';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './coach/sidebar/sidebar.component';
import { DescriptionComponent } from './coach/description/description.component';
import { RelatedCoursesComponent } from './coach/related-courses/related-courses.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CoachComponent } from './coach/coach/coach.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Test2Component } from './test2/test2.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { RegisterClientComponent } from './register-client/register-client.component';
import {MatRadioModule} from '@angular/material/radio';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { IndexComponent } from './index/index.component';

import { CoursComponent } from './cours/cours/cours.component';
import { CoursActivesComponent } from './cours/cours-actives/cours-actives.component';
import { AboutCoursComponent } from './cours/about-cours/about-cours.component';
import { PricingPlanComponent } from './cours/pricing-plan/pricing-plan.component';
import { AboutProgramComponent } from './programmeDuJour/about-program/about-program.component';
import { ProgrammeDuJourComponent } from './programmeDuJour/programme-du-jour/programme-du-jour.component';
import { ContactCoachComponent } from './programmeDuJour/contact-coach/contact-coach.component';
import { ListCoachsComponent } from './coach/list-coachs/list-coachs.component';
import { EspaceCoachComponent } from './escpaceCoach/espace-coach/espace-coach.component';
import { CoachInformationsComponent } from './escpaceCoach/coach-informations/coach-informations.component';
import { CreateProgramComponent } from './escpaceCoach/create-program/create-program.component';
import { MyClientsComponent } from './escpaceCoach/my-clients/my-clients.component';
import { SideBarComponent } from './escpaceCoach/side-bar/side-bar.component';
import { SidenavEspaceComponent } from './sidenav-espace/sidenav-espace.component';
import { EspaceCoachProgramsComponent } from './escpaceCoach/espace-coach-programs/espace-coach-programs.component';
import { EspaceCoachWorkoutsComponent } from './escpaceCoach/espace-coach-workouts/espace-coach-workouts.component';
import { EspaceCoachMealsComponent } from './escpaceCoach/espace-coach-meals/espace-coach-meals.component';
import { CoachUpdateInformationsComponent } from './escpaceCoach/coach-update-informations/coach-update-informations.component';
import { CoachCreateProgramComponent } from './escpaceCoach/coach-create-program/coach-create-program.component';
import { CoachCreateWorkoutComponent } from './escpaceCoach/coach-create-workout/coach-create-workout.component';
import { CoachCreateMealComponent } from './escpaceCoach/coach-create-meal/coach-create-meal.component';
import { EspaceClientComponent } from './espaceClient/espace-client/espace-client.component';
import { ClientInformationsComponent } from './espaceClient/client-informations/client-informations.component';
import { CoachCreateCourseComponent } from './escpaceCoach/coach-create-course/coach-create-course.component';
import { EspaceCoachCoursesComponent } from './escpaceCoach/espace-coach-courses/espace-coach-courses.component';
import { ClientProgramsComponent } from './espaceClient/client-programs/client-programs.component';
import { ClientCoursesComponent } from './espaceClient/client-courses/client-courses.component';
import { ClientUpdateInformationsComponent } from './espaceClient/client-update-informations/client-update-informations.component';



@NgModule({
  declarations: [
    AppComponent,
    WeeklyProgramComponent,
    DailyProgramListComponent,

    DailyProgramItemWorkoutComponent,
    DailyProgramItemMealComponent,
    TestComponent,
    SidebarComponent,
    DescriptionComponent,
    RelatedCoursesComponent,
    LoginComponent,
    RegisterComponent,
    CoachComponent,
    Test2Component,
    RegisterClientComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    CoursComponent,
    CoursActivesComponent,
    AboutCoursComponent,
    PricingPlanComponent,

    AboutProgramComponent,
    ProgrammeDuJourComponent,
    ContactCoachComponent,
    ListCoachsComponent,
    EspaceCoachComponent,
    CoachInformationsComponent,
    CreateProgramComponent,
    MyClientsComponent,
    SideBarComponent,
    SidenavEspaceComponent,
    EspaceCoachProgramsComponent,
    EspaceCoachWorkoutsComponent,
    EspaceCoachMealsComponent,
    CoachUpdateInformationsComponent,
    CoachCreateProgramComponent,
    CoachCreateWorkoutComponent,
    CoachCreateMealComponent,
    EspaceClientComponent,
    ClientInformationsComponent,
    CoachCreateCourseComponent,
    EspaceCoachCoursesComponent,
    ClientProgramsComponent,
    ClientCoursesComponent,
    ClientUpdateInformationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     MatStepperModule,
    MatNativeDateModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
