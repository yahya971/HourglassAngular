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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
