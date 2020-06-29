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
  },
  {
    path: 'auth/signin',
    component: AppAuthComponent,
    data: {
      title: 'Sign in'
    },
    children: [
      {
        path: '',
        component: SigninComponent,
        outlet: 'auth-route'
      },
    ]
  },
  {
    path: 'auth/register',
    component: AppAuthComponent,
    data: {
      title: 'Register'
    },
    children: [
      {
        path: '',
        component: RegisterComponent,
        outlet: 'auth-route'
      },
    ]
  },
  {
    path: 'auth/forgotten-pass',
    component: AppAuthComponent,
    data: {
      title: 'Forgotten Password?'
    },
    children: [
      {
        path: '',
        component: ForgottenPassComponent,
        outlet: 'auth-route'
      },
    ]
  },
  {
    path: 'auth/locked',
    component: AppAuthComponent,
    data: {
      title: 'Locked out'
    },
    children: [
      {
        path: '',
        component: LockedComponent,
        outlet: 'auth-route'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAuthRoutingModule { }
