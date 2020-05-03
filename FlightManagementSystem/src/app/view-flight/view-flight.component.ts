import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';  
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import {DataTablesModule} from 'angular-datatables';  

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  constructor(private flightService:FlightService) { }

  FlightsArray:any[]=[];
  dtOptions:DataTables.Settings={};
  dtTrigger: Subject<any>= new Subject();  
  flights: Observable<Flight[]>;  
  flight : Flight=new Flight();  
  deleteMessage=false;  
  flightlist:any;  
  isupdated = false;      
  ngOnInit() {
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
  }
  this.flightService.getFlightList().subscribe(data =>{  
    this.flights =data;  
    this.dtTrigger.next();  
    })  
}
deleteFlight(flightNumber: number) {  
  this.flightService.deleteFlight(flightNumber)  
    .subscribe(  
      data => {  
        console.log(data);  
        this.deleteMessage=true;  
        this.flightService.getFlightList().subscribe(data =>{  
          this.flights =data  
          })  
      },  
      error => console.log(error));  
}  
updateFlight(flightNumber: number){  
  this.flightService.getFlight(flightNumber)  
    .subscribe(  
      data => {  
        this.flightlist=data             
      },  
      error => console.log(error));  
}
flightupdateform=new FormGroup({  
  flight_number:new FormControl(),  
  flight_model:new FormControl(),  
  carrier_name:new FormControl(),  
  seat_capacity:new FormControl()  
}); 
updateFlights(updflights){  
  this.flight=new Flight();   
 this.flight.flight_number=this.FlightNumber.value;  
 this.flight.flight_model=this.FlightModel.value;  
 this.flight.carrier_name=this.CarrierName.value;  
 this.flight.seat_capacity=this.SeatCapacity.value;  
 console.log(this.SeatCapacity.value);   
 this.flightService.updateFlight(this.flight.flight_number,this.flight).subscribe(  
  data => {       
    this.isupdated=true;  
    this.flightService.getFlightList().subscribe(data =>{this.flights =data})  
  },  
  error => console.log(error));  
} 
get FlightNumber(){  
  return this.flightupdateform.get('flight_number');  
}  

get FlightModel(){  
  return this.flightupdateform.get('flight_model');  
}  

get CarrierName(){  
  return this.flightupdateform.get('carrier_name');  
}  

get SeatCapacity(){  
  return this.flightupdateform.get('seat_capacity');  
}  

changeisUpdate(){  
  this.isupdated=false;  
}  
}  