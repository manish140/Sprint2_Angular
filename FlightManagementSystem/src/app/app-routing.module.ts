import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { AddAirportComponent } from './add-airport/add-airport.component'; 
import { ViewAirportComponent } from './view-airport/view-airport.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';

const routes: Routes = [
  {path:'',redirectTo:'add-flight',pathMatch:'full'},
  {path:'add-flight',component:AddFlightComponent},
  {path:'view-flight',component:ViewFlightComponent},
  {path:'add-airport',component:AddAirportComponent},
  {path:'view-airport',component:ViewAirportComponent},
  {path:'search-flight',component:SearchFlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
