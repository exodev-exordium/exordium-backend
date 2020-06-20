import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthComponent } from './app-auth.component';

import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { ForgottenPassComponent } from './forgotten-pass/forgotten-pass.component';
import { LockedComponent } from './locked/locked.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AppAuthComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        component: SigninComponent,
        outlet: 'auth-route',
        data: {
          title: 'Sign in'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        outlet: 'auth-route',
        data: {
          title: 'Register'
        }
      },
      {
        path: 'forgotten-pass',
        component: ForgottenPassComponent,
        outlet: 'auth-route',
        data: {
          title: 'Forgotten Password?'
        }
      },
      {
        path: 'locked',
        component: LockedComponent,
        outlet: 'auth-route',
        data: {
          title: 'Session Locked'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAuthRoutingModule { }
