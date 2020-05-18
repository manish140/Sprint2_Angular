import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { AddAirportComponent } from './add-airport/add-airport.component'; 
import { ViewAirportComponent } from './view-airport/view-airport.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FlightHomeComponent } from './flight-home/flight-home.component';
import { AirportHomeComponent } from './airport-home/airport-home.component';
import{AuthGuardService} from './service/auth-guard.service';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginHomeComponent } from './login-home/login-home.component';

const routes: Routes = [
  {path:'',redirectTo:'login-home',pathMatch:'full'},
  {path:'login-home',component:LoginHomeComponent,
children:[
  {path:'login',component:LoginComponent},
  {path:'user-login',component:UserLoginComponent},
]},
 
  {path:'login-home/login/home',component:HomeComponent},
  {path:'login-home/login/home/flight-home',component:FlightHomeComponent,
  children:[
    {path:'add-flight',component:AddFlightComponent},
    {path:'view-flight',component:ViewFlightComponent},
    {path:'search-flight',component:SearchFlightComponent},
  ]
},

  {path:'login-home/login/home/airport-home',component:AirportHomeComponent,
children:[
  {path:'add-airport',component:AddAirportComponent},
  {path:'view-airport',component:ViewAirportComponent},
]
},
  {path:'login-home/login/home/users-home',component:UsersHomeComponent,
children:[
  {path:'view-users',component:ViewUsersComponent},
]},
 
  {path:'register',component:RegisterComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
