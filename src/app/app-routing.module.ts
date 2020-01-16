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
import { ClientUpdateInformationsComponent } from './components/espaceClient/client-update-informations/client-update-informations.component';
import { ClientCoursesComponent } from './components/espaceClient/client-courses/client-courses.component';
import {Form2Component} from './components/escpaceCoach/coach-create-program/form2/form2.component';
import {Form3Component} from './components/escpaceCoach/coach-create-program/form3/form3.component';
import { MealComponent } from './components/escpaceCoach/meal/meal.component';
import { CoachUpdateMealComponent } from './components/escpaceCoach/coach-update-meal/coach-update-meal.component';
import {ClientDayComponent} from "./components/espaceClient/client-day/client-day.component";
import {ClientSurveyComponent} from "./components/espaceClient/client-survey/client-survey.component";
import {ClientCalendarComponent} from "./components/espaceClient/client-calendar/client-calendar.component";
import { CoachUpdateWorkoutComponent } from './components/escpaceCoach/coach-update-workout/coach-update-workout.component';
import { WorkoutComponent } from './components/escpaceCoach/workout/workout.component';
import { ClientComponent } from './components/escpaceCoach/client/client.component';


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
          {path: ':id', component: ProgrammeDuJourComponent}
        ]
      },
      {path: 'cours', component: CoursComponent}
    ]
  },
  {
    path: 'espace/coach', component: EspaceCoachComponent,
    children: [
      {
        path: 'informations/:id', component: CoachInformationsComponent

      },
      {
        path: 'clients/:id', component: MyClientsComponent
      },
      {
        path: 'client/:id/:clientId', component: ClientComponent
      },
      {
        path: 'programs/:id', component: EspaceCoachProgramsComponent
      },
      {
        path: 'workouts/:id', component: EspaceCoachWorkoutsComponent
      },
      {
        path: 'meals/:id', component: EspaceCoachMealsComponent
      },
      {
        path: 'update/informations/:id', component: CoachUpdateInformationsComponent
      },
      {
        path: 'update/meal/:id/:mealId', component: CoachUpdateMealComponent
      },
      {
        path: 'update/workout/:id/:workoutId', component: CoachUpdateWorkoutComponent
      },
      {
        path: 'create/program/:id', component: CoachCreateProgramComponent
      },
      {
        path: 'create/program/form2/:id', component: Form2Component
      },
      {
        path: 'create/program/form3/:id', component: Form3Component
      },
      {
        path: 'create/workout/:id' , component: CoachCreateWorkoutComponent
      },
      {
        path: 'create/meal/:id', component: CoachCreateMealComponent
      },
      {
        path: 'courses/:id', component: EspaceCoachCoursesComponent
      },
      {
        path: 'create/course/:id', component: CoachCreateCourseComponent
      },
      {
        path: 'meal/:id/:mealId', component: MealComponent
      },
      {
        path: 'workout/:id/:workoutId', component: WorkoutComponent
      }
    ]

  },
  {
    path: 'espace/client', component: EspaceClientComponent,
    children: [
      {
        path: 'informations/:id', component: ClientInformationsComponent},
      {
        path: 'update/informations/:id', component: ClientUpdateInformationsComponent
      },
      {
        path: 'survey/:id', component: ClientSurveyComponent
      },
      {
        path: 'calendar/:id', component: ClientCalendarComponent
      },
      {
        path: 'courses/:id', component: ClientCoursesComponent
      },
      {
        path: 'day/:id', component: ClientDayComponent
      },
      {
        path: '**', component: ClientInformationsComponent
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
