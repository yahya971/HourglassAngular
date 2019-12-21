import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterClientComponent} from './register-client/register-client.component';
import {RegisterComponent} from './register/register.component';
import {IndexComponent} from './index/index.component';
import {CoachComponent} from './coach/coach/coach.component';
import {ProgrammeDuJourComponent} from './programmeDuJour/programme-du-jour/programme-du-jour.component';
import {CoursComponent} from './cours/cours/cours.component';
import {ListCoachsComponent} from './coach/list-coachs/list-coachs.component';
import { EspaceCoachComponent } from './escpaceCoach/espace-coach/espace-coach.component';
import { CoachInformationsComponent } from './escpaceCoach/coach-informations/coach-informations.component';
import { EspaceCoachProgramsComponent } from './escpaceCoach/espace-coach-programs/espace-coach-programs.component';
import { EspaceCoachWorkoutsComponent } from './escpaceCoach/espace-coach-workouts/espace-coach-workouts.component';
import { EspaceCoachMealsComponent } from './escpaceCoach/espace-coach-meals/espace-coach-meals.component';
import { CoachUpdateInformationsComponent } from './escpaceCoach/coach-update-informations/coach-update-informations.component';
import { CoachCreateProgramComponent } from './escpaceCoach/coach-create-program/coach-create-program.component';
import { CoachCreateWorkoutComponent } from './escpaceCoach/coach-create-workout/coach-create-workout.component';
import { CoachCreateMealComponent } from './escpaceCoach/coach-create-meal/coach-create-meal.component';
import { EspaceClientComponent } from './espaceClient/espace-client/espace-client.component';
import {MyClientsComponent} from './escpaceCoach/my-clients/my-clients.component';
import { EspaceCoachCoursesComponent } from './escpaceCoach/espace-coach-courses/espace-coach-courses.component';
import { CoachCreateCourseComponent } from './escpaceCoach/coach-create-course/coach-create-course.component';
import { ClientInformationsComponent } from './espaceClient/client-informations/client-informations.component';
import { ClientUpdateInformationsComponent } from './espaceClient/client-update-informations/client-update-informations.component';
import { ClientCoursesComponent } from './espaceClient/client-courses/client-courses.component';
import { ClientProgramsComponent } from './espaceClient/client-programs/client-programs.component';

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
        path: 'create/program/:id', component: CoachCreateProgramComponent
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
      }
    ]

  },
  {
    path: 'espace/client', component: EspaceClientComponent,
    children: [
      { path: 'informations/:id', component: ClientInformationsComponent },
      {
        path: 'update/informations/:id', component: ClientUpdateInformationsComponent
      },
      {
        path: 'courses/:id', component: ClientCoursesComponent
      },
      {
        path: 'programs/:id', component: ClientProgramsComponent
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
