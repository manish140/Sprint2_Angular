import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';
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
    flight_number:new FormControl('',[Validators.required,Validators.min(1000)]),
    flight_model:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    carrier_name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    seat_capacity:new FormControl('',[Validators.required,Validators.min(2),Validators.max(850)])
  });
  saveFlight(saveFlight){  
    this.flight=new Flight();    
    this.flight.flight_number=this.FlightNumber.value; 
    this.flight.flight_model=this.FlightModel.value;  
    this.flight.carrier_name=this.CarrierName.value;  
    this.flight.seat_capacity=this.SeatCapacity.value;  
    this.submitted = true;  
    this.save();  
  }  
 save(){
  this.flightservice.addFlight(this.flight)  
  .subscribe(data => console.log(data), error => console.log(error));  
this.flight = new Flight();  
} 
get FlightNumber(){  
  return this.flightSaveForm.get('flight_number');  
}  
get FlightModel(){  
  return this.flightSaveForm.get('flight_model');  
}  

get CarrierName(){  
  return this.flightSaveForm.get('carrier_name');  
}  

get SeatCapacity(){  
  return this.flightSaveForm.get('seat_capacity');  
} 
addFlightForm(){  
  this.submitted=false;  
  this.flightSaveForm.reset();  
}   
}
