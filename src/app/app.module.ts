import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CheckPassDirective } from './directives/check-pass.directive';
import { ModifyComponent } from './components/modify/modify.component';
import { CheckMaritalStatusDirective } from './directives/check-marital-status.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { CheckDateDirective } from './directives/check-date.directive';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CheckPassDirective,
    ModifyComponent,
    CheckMaritalStatusDirective,
    ProfileComponent,
    CheckDateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
