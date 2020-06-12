import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Additions
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Main Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Authentication Pages
import { SigninComponent } from './_pages/auth/signin/signin.component';
import { RegisterComponent } from './_pages/auth/register/register.component';
import { ForgottenPassComponent } from './_pages/auth/forgotten-pass/forgotten-pass.component';
import { LockedComponent } from './_pages/auth/locked/locked.component';

// Clients Dashboard
import { DashboardComponent } from './_pages/dashboard/clients/dashboard/dashboard.component';
import { UserConnectionsComponent } from './_pages/dashboard/clients/user/user-connections/user-connections.component';
import { UserLogsComponent } from './_pages/dashboard/clients/user/user-logs/user-logs.component';
import { UserOverviewComponent } from './_pages/dashboard/clients/user/user-overview/user-overview.component';
import { UserSecurityComponent } from './_pages/dashboard/clients/user/user-security/user-security.component';
import { UserSessionsComponent } from './_pages/dashboard/clients/user/user-sessions/user-sessions.component';
import { UserSettingsComponent } from './_pages/dashboard/clients/user/user-settings/user-settings.component';

// Moderation Dashboard
import { ModOverviewComponent } from './_pages/dashboard/moderation/mod-overview/mod-overview.component';
import { ModContactComponent } from './_pages/dashboard/moderation/mod-contact/mod-contact.component';
import { ModUsersDisableComponent } from './_pages/dashboard/moderation/users/mod-users-disable/mod-users-disable.component';
import { ModUsersEditComponent } from './_pages/dashboard/moderation/users/mod-users-edit/mod-users-edit.component';
import { ModUsersViewComponent } from './_pages/dashboard/moderation/users/mod-users-view/mod-users-view.component';
import { ModUsersComponent } from './_pages/dashboard/moderation/users/mod-users/mod-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    ForgottenPassComponent,
    LockedComponent,
    
    DashboardComponent,
    UserConnectionsComponent,
    UserLogsComponent,
    UserOverviewComponent,
    UserSecurityComponent,
    UserSessionsComponent,
    UserSettingsComponent,

    ModOverviewComponent,
    ModContactComponent,
    ModUsersDisableComponent,
    ModUsersEditComponent,
    ModUsersViewComponent,
    ModUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
