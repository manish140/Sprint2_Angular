import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Airport } from '../airport';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.css']
})
export class AddAirportComponent implements OnInit {

  constructor(private flightservice:FlightService) { }
  airport: Airport=new Airport();
  submitted=false;

  ngOnInit() {
    this.submitted=false;
  }
  airportSaveForm=new FormGroup({
    airportName:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    airportCode:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    airportLocation:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
  });
  saveAirport(saveAirport){  
    this.airport=new Airport();    
    this.airport.airportName=this.AirportName.value; 
    this.airport.airportCode=this.AirportCode.value;  
    this.airport.airportLocation=this.AirportLocation.value;    
    this.submitted = true;  
    this.save();  
  }  
  save(){
    this.flightservice.addAirport(this.airport)  
    .subscribe(data => console.log(data), error => console.log(error));  
  this.airport = new Airport();  
  } 
  get AirportName(){  
    return this.airportSaveForm.get('airportName');  
  }  
  get AirportCode(){  
    return this.airportSaveForm.get('airportCode');  
  }  
  
  get AirportLocation(){  
    return this.airportSaveForm.get('airportLocation');  
  }  
  addAirportForm(){  
    this.submitted=true;
    this.airportSaveForm.reset();  
  }   

}
