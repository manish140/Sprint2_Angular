import { Component, OnInit } from '@angular/core';
import { AirportService, Airport } from '../service/airport.service'
import {FormControl,FormGroup,Validators} from '@angular/forms';  
@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.css']
})
export class AddAirportComponent implements OnInit {

  constructor(private flightservice:AirportService) { }
  airport: Airport=new Airport();
  submitted=false;

  ngOnInit() {
    this.submitted=false;
  }
  airportSaveForm=new FormGroup({
    airportName:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(40),Validators.pattern("^[A-Za-z ]{6,40}$")]),
    airportCode:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.pattern("^[A-Za-z ]{3,3}$")]),
    airportLocation:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern("^[A-Za-z ]{3,30}$")]),
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
