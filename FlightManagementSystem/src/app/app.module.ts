import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';  


@NgModule({
  declarations: [
    AppComponent,
    AddFlightComponent,
    ViewFlightComponent
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
