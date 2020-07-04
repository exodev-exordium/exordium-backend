import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthComponent } from './app-auth.component';
import { AuthGuard } from 'src/app/__services/auth.guard';

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
    children: [
      {
        path: '',
        component: SigninComponent,
        outlet: 'auth-route',
        data: {
          title: 'Sign in'
        },
      },
    ]
  },
  {
    path: 'auth/register',
    component: AppAuthComponent,
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
    children: [
      {
        path: '',
        component: ForgottenPassComponent,
        outlet: 'auth-route',
        data: {
          title: 'Forgotten Password?'
        },
      },
    ]
  },
  {
    path: 'auth/locked',
    component: AppAuthComponent,
    children: [
      {
        path: '',
        component: LockedComponent,
        outlet: 'auth-route',
        data: {
          title: 'Locked out'
        },
      },
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAuthRoutingModule { }
