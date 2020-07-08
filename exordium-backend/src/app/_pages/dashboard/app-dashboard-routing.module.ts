import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppDashboardComponent } from './app-dashboard.component';
import { AuthGuard } from 'src/app/__services/auth.guard';

import { DashboardComponent } from './clients/dashboard/dashboard.component';
import { BlogComponent } from './clients/blog/blog.component';
import { NetworkStatusComponent } from './clients/network-status/network-status.component';

import { StaffContactComponent } from './management/support/staff-contact/staff-contact.component';

import { StaffUsersOverviewComponent } from './management/users/staff-users-overview/staff-users-overview.component';
import { StaffUsersEditComponent } from './management/users/staff-users-edit/staff-users-edit.component';
import { StaffUsersDisableComponent } from './management/users/staff-users-disable/staff-users-disable.component';
import { StaffUsersAddComponent } from './management/users/staff-users-add/staff-users-add.component';

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
    path: 'dashboard/purchase',
    component: AppDashboardComponent,
    children: [
      {
        path: '',
        component: NetworkStatusComponent,
        outlet: 'dashroute',
        data: {
          title: 'Purchase'
        }
      },
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

  {
    path: 'dashboard/staff/contact',
    component: AppDashboardComponent,
    children: [
      {
        path: '',
        component: StaffContactComponent,
        outlet: 'dashroute',
        data: {
          title: 'Contact Requests'
        }
      },
    ],
    canActivate: [AuthGuard]
  },
  
  {
    path: 'dashboard/staff/users',
    component: AppDashboardComponent,
    children: [
      {
        path: '',
        component: StaffUsersOverviewComponent,
        outlet: 'dashroute',
        data: {
          title: 'Users Overview'
        }
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/staff/users/edit/:id',
    component: AppDashboardComponent,
    children: [
      {
        path: '',
        component: StaffUsersEditComponent,
        outlet: 'dashroute',
        data: {
          title: 'Edit User'
        }
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/staff/users/disable/:id',
    component: AppDashboardComponent,
    children: [
      {
        path: '',
        component: StaffUsersDisableComponent,
        outlet: 'dashroute',
        data: {
          title: 'Disable User'
        }
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/staff/users/add',
    component: AppDashboardComponent,
    children: [
      {
        path: '',
        component: StaffUsersAddComponent,
        outlet: 'dashroute',
        data: {
          title: 'Add new user'
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
