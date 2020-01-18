import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterClientComponent} from './components/register-client/register-client.component';
import {RegisterComponent} from './components/register/register.component';
import {IndexComponent} from './components/index/index.component';
import {CoachComponent} from './components/coach/coach/coach.component';
import {ProgrammeDuJourComponent} from './components/programmeDuJour/programme-du-jour/programme-du-jour.component';
import {CoursComponent} from './components/cours/cours/cours.component';
import {ListCoachsComponent} from './components/coach/list-coachs/list-coachs.component';
import { EspaceCoachComponent } from './components/escpaceCoach/espace-coach/espace-coach.component';
import { CoachInformationsComponent } from './components/escpaceCoach/coach-informations/coach-informations.component';
import { EspaceCoachProgramsComponent } from './components/escpaceCoach/espace-coach-programs/espace-coach-programs.component';
import { EspaceCoachWorkoutsComponent } from './components/escpaceCoach/espace-coach-workouts/espace-coach-workouts.component';
import { EspaceCoachMealsComponent } from './components/escpaceCoach/espace-coach-meals/espace-coach-meals.component';
import { CoachUpdateInformationsComponent } from './components/escpaceCoach/coach-update-informations/coach-update-informations.component';
import { CoachCreateProgramComponent } from './components/escpaceCoach/coach-create-program/coach-create-program.component';
import { CoachCreateWorkoutComponent } from './components/escpaceCoach/coach-create-workout/coach-create-workout.component';
import { CoachCreateMealComponent } from './components/escpaceCoach/coach-create-meal/coach-create-meal.component';
import { EspaceClientComponent } from './components/espaceClient/espace-client/espace-client.component';
import {MyClientsComponent} from './components/escpaceCoach/my-clients/my-clients.component';
import { EspaceCoachCoursesComponent } from './components/escpaceCoach/espace-coach-courses/espace-coach-courses.component';
import { CoachCreateCourseComponent } from './components/escpaceCoach/coach-create-course/coach-create-course.component';
import { ClientInformationsComponent } from './components/espaceClient/client-informations/client-informations.component';
// tslint:disable-next-line:max-line-length
import { ClientUpdateInformationsComponent } from './components/espaceClient/client-update-informations/client-update-informations.component';
import { ClientCoursesComponent } from './components/espaceClient/client-courses/client-courses.component';
import {Form2Component} from './components/escpaceCoach/coach-create-program/form2/form2.component';
import {Form3Component} from './components/escpaceCoach/coach-create-program/form3/form3.component';
import { MealComponent } from './components/escpaceCoach/meal/meal.component';
import { CoachUpdateMealComponent } from './components/escpaceCoach/coach-update-meal/coach-update-meal.component';
import {ClientDayComponent} from './components/espaceClient/client-day/client-day.component';
import {ClientSurveyComponent} from './components/espaceClient/client-survey/client-survey.component';
import {ClientCalendarComponent} from './components/espaceClient/client-calendar/client-calendar.component';
import {ClientComponent} from './components/escpaceCoach/client/client.component';
import {ListprogramsComponent} from './components/programmeDuJour/listprograms/listprograms.component';
import { CoachUpdateWorkoutComponent } from './components/escpaceCoach/coach-update-workout/coach-update-workout.component';
import { WorkoutComponent } from './components/escpaceCoach/workout/workout.component';
import {CheckoutComponent} from './components/programmeDuJour/checkout/checkout.component';

import { CoachCreateDayProgram1Component } from './components/escpaceCoach/coach-create-day-program1/coach-create-day-program1.component';
import { CoachGuard } from './Guards/coach.guard';
import { ClientGuardGuard } from './Guards/client-guard.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: IndexComponent},
      {path: 'login', component: LoginComponent},
      {
        path: 'client',
        children: [
          {path: 'register', component: RegisterClientComponent}
        ]
      },
      {
        path: 'coach',
        children: [
          {path: '', component: ListCoachsComponent},
          {path: 'register', component: RegisterComponent},
          {path: ':id', component: CoachComponent}
        ]
      },
      {
        path: 'wlprogram',
        children: [
          {path: '', component: ListprogramsComponent},
          {path: ':id', component: ProgrammeDuJourComponent},
          {path: 'checkout/:id', component: CheckoutComponent}
        ]
      },
      {path: 'cours', component: CoursComponent}
    ]
  },
  {
    path: 'espace/coach', component: EspaceCoachComponent ,
    children: [
      {
        path: 'informations/:id', component: CoachInformationsComponent, canActivate: [CoachGuard]

      },
      {
        path: 'clients/:id', component: MyClientsComponent, canActivate: [CoachGuard]
      },
      {
        path: 'client/:id/:clientId', component: ClientComponent, canActivate: [CoachGuard]
      },
      {
        path: 'programs/:id', component: EspaceCoachProgramsComponent, canActivate: [CoachGuard]
      },
      {
        path: 'workouts/:id', component: EspaceCoachWorkoutsComponent, canActivate: [CoachGuard]
      },
      {
        path: 'meals/:id', component: EspaceCoachMealsComponent, canActivate: [CoachGuard]
      },
      {
        path: 'update/informations/:id', component: CoachUpdateInformationsComponent, canActivate: [CoachGuard]
      },
      {
        path: 'update/meal/:id/:mealId', component: CoachUpdateMealComponent, canActivate: [CoachGuard]
      },
      {
        path: 'update/workout/:id/:workoutId', component: CoachUpdateWorkoutComponent, canActivate: [CoachGuard]
      },
      {
        path: 'create/program/:id', component: CoachCreateProgramComponent, canActivate: [CoachGuard]
      },
      {
        path: 'create/program/form2/:id', component: Form2Component, canActivate: [CoachGuard]
      },
      {
        path: 'create/program/form3/:id', component: Form3Component, canActivate: [CoachGuard]
      },
      {
        path: 'create/workout/:id', component: CoachCreateWorkoutComponent, canActivate: [CoachGuard]
      },
      {
        path: 'create/meal/:id', component: CoachCreateMealComponent, canActivate: [CoachGuard]
      },
      {
        path: 'courses/:id', component: EspaceCoachCoursesComponent, canActivate: [CoachGuard]
      },
      {
        path: 'create/course/:id', component: CoachCreateCourseComponent, canActivate: [CoachGuard]
      },
      {
        path: 'meal/:id/:mealId', component: MealComponent, canActivate: [CoachGuard]
      },
      {
        path: 'workout/:id/:workoutId', component: WorkoutComponent, canActivate: [CoachGuard]
      },
      {
        path: 'create/dayProgram/:id', component: CoachCreateDayProgram1Component, canActivate: [CoachGuard]
      }
    ]

  },
  {
    path: 'espace/client', component: EspaceClientComponent,
    children: [
      {
        path: 'informations/:id', component: ClientInformationsComponent, canActivate: [ClientGuardGuard]
      },
      {
        path: 'update/informations/:id', component: ClientUpdateInformationsComponent, canActivate: [ClientGuardGuard]
      },
      {
        path: 'survey/:id', component: ClientSurveyComponent, canActivate: [ClientGuardGuard]
      },
      {
        path: 'calendar/:id', component: ClientCalendarComponent, canActivate: [ClientGuardGuard]
      },
      {
        path: 'courses/:id', component: ClientCoursesComponent, canActivate: [ClientGuardGuard]
      },
      {
        path: 'day/:id', component: ClientDayComponent, canActivate: [ClientGuardGuard]
      },
      {
        path: '**', component: ClientInformationsComponent, canActivate: [ClientGuardGuard]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
