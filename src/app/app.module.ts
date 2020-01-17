import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
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
import {DragDropModule} from '@angular/cdk/drag-drop';
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
import { ClientCoursesComponent } from './components/espaceClient/client-courses/client-courses.component';
// tslint:disable-next-line:max-line-length
import { ClientUpdateInformationsComponent } from './components/espaceClient/client-update-informations/client-update-informations.component';
import { Form2Component } from './components/escpaceCoach/coach-create-program/form2/form2.component';
import { Form3Component } from './components/escpaceCoach/coach-create-program/form3/form3.component';
import { MealComponent } from './components/escpaceCoach/meal/meal.component';
import { CoachUpdateMealComponent } from './components/escpaceCoach/coach-update-meal/coach-update-meal.component';
import { MealCardComponent } from './components/escpaceCoach/espace-coach-meals/meal-card/meal-card.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ClientSurveyComponent } from './components/espaceClient/client-survey/client-survey.component';
import { ClientDayComponent } from './components/espaceClient/client-day/client-day.component';
import { ClientCalendarComponent } from './components/espaceClient/client-calendar/client-calendar.component';
import { CoachUpdateWorkoutComponent } from './components/escpaceCoach/coach-update-workout/coach-update-workout.component';
import { WorkoutComponent } from './components/escpaceCoach/workout/workout.component';
import { ClientComponent } from './components/escpaceCoach/client/client.component';
import { ListprogramsComponent } from './components/programmeDuJour/listprograms/listprograms.component';
import { CoachCreateDayProgram1Component } from './components/escpaceCoach/coach-create-day-program1/coach-create-day-program1.component';
import { CoachCreateDayProgram2Component } from './components/escpaceCoach/coach-create-day-program2/coach-create-day-program2.component';

import { FullCalendarModule} from '@fullcalendar/angular';
import { CheckoutComponent } from './components/programmeDuJour/checkout/checkout.component';


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
    ClientCoursesComponent,
    ClientUpdateInformationsComponent,
    Form2Component,
    Form3Component,
    MealComponent,
    CoachUpdateMealComponent,
    MealCardComponent,
    ClientSurveyComponent,
    ClientDayComponent,
    ClientCalendarComponent,
    ClientComponent,
    ListprogramsComponent,

    WorkoutComponent,
    CoachUpdateWorkoutComponent
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
    MaterialFileInputModule,
    MatDividerModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
