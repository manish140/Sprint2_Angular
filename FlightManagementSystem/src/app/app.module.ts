import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { ViewAirportComponent } from './view-airport/view-airport.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FlightHomeComponent } from './flight-home/flight-home.component';
import { AirportHomeComponent } from './airport-home/airport-home.component';
import { UsersHomeComponent } from './users-home/users-home.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginHomeComponent } from './login-home/login-home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFlightComponent,
    ViewFlightComponent,
    AddAirportComponent,
    ViewAirportComponent,
    SearchFlightComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FlightHomeComponent,
    AirportHomeComponent,
    UsersHomeComponent,
    ViewUsersComponent,
    UserLoginComponent,
    LoginHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
