import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeeklyProgramComponent } from './components/programmeDuJour/WeeklyPrograms/weekly-program/weekly-program.component';
import { DailyProgramListComponent } from './components/programmeDuJour/WeeklyPrograms/daily-program-list/daily-program-list.component';
import { HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line:max-line-length
import { DailyProgramItemWorkoutComponent } from './components/programmeDuJour/WeeklyPrograms/daily-program-item-workout/daily-program-item-workout.component';
import { DailyProgramItemMealComponent } from './components/programmeDuJour/WeeklyPrograms/daily-program-item-meal/daily-program-item-meal.component';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './components/coach/sidebar/sidebar.component';
import { DescriptionComponent } from './components/coach/description/description.component';
import { RelatedCoursesComponent } from './components/coach/related-courses/related-courses.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CoachComponent } from './components/coach/coach/coach.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Test2Component } from './test2/test2.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { IndexComponent } from './components/index/index.component';

import { CoursComponent } from './components/cours/cours/cours.component';
import { CoursActivesComponent } from './components/cours/cours-actives/cours-actives.component';
import { AboutCoursComponent } from './components/cours/about-cours/about-cours.component';
import { PricingPlanComponent } from './components/cours/pricing-plan/pricing-plan.component';
import { AboutProgramComponent } from './components/programmeDuJour/about-program/about-program.component';
import { ProgrammeDuJourComponent } from './components/programmeDuJour/programme-du-jour/programme-du-jour.component';
import { ContactCoachComponent } from './components/programmeDuJour/contact-coach/contact-coach.component';
import { ListCoachsComponent } from './components/coach/list-coachs/list-coachs.component';
import { EspaceCoachComponent } from './components/escpaceCoach/espace-coach/espace-coach.component';
import { CoachInformationsComponent } from './components/escpaceCoach/coach-informations/coach-informations.component';
import { CreateProgramComponent } from './components/escpaceCoach/create-program/create-program.component';
import { MyClientsComponent } from './components/escpaceCoach/my-clients/my-clients.component';
import { SideBarComponent } from './components/escpaceCoach/side-bar/side-bar.component';
import { SidenavEspaceComponent } from './components/sidenav-espace/sidenav-espace.component';
import { EspaceCoachProgramsComponent } from './components/escpaceCoach/espace-coach-programs/espace-coach-programs.component';
import { EspaceCoachWorkoutsComponent } from './components/escpaceCoach/espace-coach-workouts/espace-coach-workouts.component';
import { EspaceCoachMealsComponent } from './components/escpaceCoach/espace-coach-meals/espace-coach-meals.component';
import { CoachUpdateInformationsComponent } from './components/escpaceCoach/coach-update-informations/coach-update-informations.component';
import { CoachCreateProgramComponent } from './components/escpaceCoach/coach-create-program/coach-create-program.component';
import { CoachCreateWorkoutComponent } from './components/escpaceCoach/coach-create-workout/coach-create-workout.component';
import { CoachCreateMealComponent } from './components/escpaceCoach/coach-create-meal/coach-create-meal.component';
import { EspaceClientComponent } from './components/espaceClient/espace-client/espace-client.component';
import { ClientInformationsComponent } from './components/espaceClient/client-informations/client-informations.component';
import { CoachCreateCourseComponent } from './components/escpaceCoach/coach-create-course/coach-create-course.component';
import { EspaceCoachCoursesComponent } from './components/escpaceCoach/espace-coach-courses/espace-coach-courses.component';
import { ClientProgramsComponent } from './components/espaceClient/client-programs/client-programs.component';
import { ClientCoursesComponent } from './components/espaceClient/client-courses/client-courses.component';
import { ClientUpdateInformationsComponent } from './components/espaceClient/client-update-informations/client-update-informations.component';



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
    MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatRadioModule, MatMenuModule, MatIconModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
