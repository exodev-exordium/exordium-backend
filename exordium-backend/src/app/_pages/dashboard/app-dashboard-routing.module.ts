import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppDashboardComponent } from './app-dashboard.component';
import { AuthGuard } from 'src/app/__services/auth.guard';

import { DashboardComponent } from './clients/dashboard/dashboard.component';
import { BlogComponent } from './clients/blog/blog.component';
import { NetworkStatusComponent } from './clients/network-status/network-status.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: AppDashboardComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        outlet: 'dashroute',
        data: {
          title: 'Dashboard'
        }
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/blog',
    component: AppDashboardComponent,
    children: [
      {
        path: '',
        component: BlogComponent,
        outlet: 'dashroute',
        data: {
          title: 'Blog'
        }
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/network-status',
    component: AppDashboardComponent,
    children: [
      {
        path: '',
        component: NetworkStatusComponent,
        outlet: 'dashroute',
        data: {
          title: 'Network Status'
        }
      },
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDashboardRoutingModule { }
