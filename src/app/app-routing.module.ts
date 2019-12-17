import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterClientComponent} from './register-client/register-client.component';
import {RegisterComponent} from './register/register.component';
import {IndexComponent} from './index/index.component';


const routes: Routes = [
  {
    path : '',
    children: [
      {path : '', component : IndexComponent},
      {path : 'login', component : LoginComponent},
      {path : 'client',
       children: [
         {path : 'register', component : RegisterClientComponent}
       ]
      },
      {path : 'coach',
       children: [
         {path: 'register', component: RegisterComponent}
       ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
