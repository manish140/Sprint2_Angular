import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';

const routes: Routes = [
  {path:'',redirectTo:'add-flight',pathMatch:'full'},
  {path:'add-flight',component:AddFlightComponent},
  {path:'view-flight',component:ViewFlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
