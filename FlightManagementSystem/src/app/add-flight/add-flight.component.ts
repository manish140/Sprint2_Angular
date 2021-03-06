import { Component, OnInit } from '@angular/core';
import { FlightService, Flight } from '../service/flight.service'
import {FormControl,FormGroup,Validators} from '@angular/forms';  
@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private flightservice:FlightService) { }
  flight: Flight=new Flight();
  submitted=false;

  ngOnInit() {
    this.submitted=false;
  }

  flightSaveForm=new FormGroup({
    flightNumber:new FormControl('',[Validators.required,Validators.min(40000)]),
    flightModel:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern("^[a-zA-Z0-9]{4,10}$")]),
    carrierName:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern("^[A-Za-z ]{6,15}$")]),
    seatCapacity:new FormControl('',[Validators.required,Validators.min(2)])
  });
  saveFlight(saveFlight){  
    this.flight=new Flight();    
    this.flight.flightNumber=this.FlightNumber.value; 
    this.flight.flightModel=this.FlightModel.value;  
    this.flight.carrierName=this.CarrierName.value;  
    this.flight.seatCapacity=this.SeatCapacity.value;  
    this.submitted = true;  
    this.save();  
  }  
 save(){
  this.flightservice.addFlight(this.flight)  
  .subscribe(data => console.log(data), error => console.log(error));  
this.flight = new Flight();  
} 
get FlightNumber(){  
  return this.flightSaveForm.get('flightNumber');  
}  
get FlightModel(){  
  return this.flightSaveForm.get('flightModel');  
}  

get CarrierName(){  
  return this.flightSaveForm.get('carrierName');  
}  

get SeatCapacity(){  
  return this.flightSaveForm.get('seatCapacity');  
} 
addFlightForm(){  
  this.submitted=true;
  this.flightSaveForm.reset();  
}   
}
