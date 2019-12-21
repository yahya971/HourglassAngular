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
import { ClientInformationsComponent } from './espaceClient/client-informations/client-informations.component';
import { CoachCreateCourseComponent } from './escpaceCoach/coach-create-course/coach-create-course.component';
import { EspaceCoachCoursesComponent } from './escpaceCoach/espace-coach-courses/espace-coach-courses.component';
import { ClientProgramsComponent } from './espaceClient/client-programs/client-programs.component';
import { ClientCoursesComponent } from './espaceClient/client-courses/client-courses.component';
import { ClientUpdateInformationsComponent } from './espaceClient/client-update-informations/client-update-informations.component';

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
    path: 'espace/coach/:id', component: EspaceCoachComponent,
    children: [
      {
        path: 'informations', component: CoachInformationsComponent

      }, {
        path: 'programs', component: EspaceCoachProgramsComponent
      },
      {
        path: 'workouts', component: EspaceCoachWorkoutsComponent
      },
      {
        path: 'meals', component: EspaceCoachMealsComponent
      },
      {
        path:'update/informations', component:CoachUpdateInformationsComponent
      },
      {
        path: 'create/program', component: CoachCreateProgramComponent
      },
      {
        path: 'create/workout' ,component: CoachCreateWorkoutComponent
      },
      {
        path: 'create/meal', component: CoachCreateMealComponent
      },
      {
        path: 'create/course', component: CoachCreateCourseComponent
      },
      {
        path:'courses',component:EspaceCoachCoursesComponent
      }, {
        path: '**', component: CoachInformationsComponent
      }


    ]

  },
  {
    path: 'espace/client/:id', component: EspaceClientComponent,
    children: [
      {
        path: 'informations', component: ClientInformationsComponent
      },
      {
        path: 'programs', component: ClientProgramsComponent
      },
      {
        path: 'courses', component: ClientCoursesComponent
      },
      {
        path: 'update/informations', component: ClientUpdateInformationsComponent
      },
      {
        path: '**', component:ClientInformationsComponent
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
