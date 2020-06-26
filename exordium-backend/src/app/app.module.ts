import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// External
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Services
import { AuthconfigInterceptor } from './__services/authconfig.interceptor';

// Directives
import { ScrollbarDirective } from './__directives/perfect-scrollbar.directive';
import { NavbarDirective } from './__directives/navbar.directive';
import { TabDirective } from './__directives/tabs.directive';
import { ThemeSwitchDirective } from './__directives/theme-switch.directive';
import { SidebarsDirective } from './__directives/sidebars.directive';

// Main Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// RouterOutlet Components
import { AppAuthModule } from './_pages/auth/app-auth.module';
import { AppAuthComponent } from './_pages/auth/app-auth.component';
import { AppDashboardModule } from './_pages/dashboard/app-dashboard.module';
import { AppDashboardComponent } from './_pages/dashboard/app-dashboard.component';

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

@NgModule({
  declarations: [
    ScrollbarDirective,
    NavbarDirective,
    TabDirective,
    ThemeSwitchDirective,
    SidebarsDirective,

    AppComponent,

    AppAuthComponent,
    AppDashboardComponent,

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
    ModUsersComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    
    AppRoutingModule,
    AppAuthModule,
    AppDashboardModule,

    NgxDatatableModule
  ],
  providers: [
    {
       provide: LocationStrategy,
       useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthconfigInterceptor,
      multi: true
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeB5uIUAAAAAMQWnwCUpUHbdsHO4iV4emdn9KOL'
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
