import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthComponent } from './app-auth.component';

import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { ForgottenPassComponent } from './forgotten-pass/forgotten-pass.component';
import { LockedComponent } from './locked/locked.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signin',
    pathMatch: 'full',
    data: {
      title: 'Sign in'
    }
  },
  {
    path: 'auth/signin',
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
    ]
  },
  {
    path: 'auth/register',
    component: AppAuthComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        component: RegisterComponent,
        outlet: 'auth-route',
        data: {
          title: 'Register'
        }
      },
    ]
  },
  {
    path: 'auth/forgotten-pass',
    component: AppAuthComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        component: ForgottenPassComponent,
        outlet: 'auth-route',
        data: {
          title: 'Forgotten your password?'
        }
      },
    ]
  },
  {
    path: 'auth/locked',
    component: AppAuthComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        component: LockedComponent,
        outlet: 'auth-route',
        data: {
          title: 'Locked out'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAuthRoutingModule { }
