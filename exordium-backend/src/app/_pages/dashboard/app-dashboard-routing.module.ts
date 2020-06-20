import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard.component';

import { DashboardComponent } from './clients/dashboard/dashboard.component';
import { BlogComponent } from './clients/blog/blog.component';
import { NetworkStatusComponent } from './clients/network-status/network-status.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: AppDashboardComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
        outlet: 'dashboard-route',
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'blog',
        component: BlogComponent,
        outlet: 'dashboard-route',
        data: {
          title: 'Blog'
        }
      },
      {
        path: 'network-status',
        component: NetworkStatusComponent,
        outlet: 'dashboard-route',
        data: {
          title: 'Network Status'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDashboardRoutingModule { }
