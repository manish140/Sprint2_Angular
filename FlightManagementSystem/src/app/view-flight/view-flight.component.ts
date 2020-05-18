import { Component, OnInit, Inject} from '@angular/core';
import { FlightService, Flight } from '../service/flight.service'
import {Router} from "@angular/router";
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  constructor(private router: Router, private flightService:FlightService) { }

  FlightsArray:any[]=[];
  dtOptions:DataTables.Settings={};
  dtTrigger: Subject<any>= new Subject();  
  flights: Observable<Flight[]>;
  flight : Flight=new Flight();  
  deleteMessage=false;  
  flightlist:any=[];
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
  this.flightService.deleteFlight(flightNumber).subscribe(
    data => {  
      this.deleteMessage=true;
    response => {
      console.log(response);
      this.flightlist = response;
    }
  },
  error=>console.log(error));
  }
  updateFlight(flightNumber: number){  
    this.flightService.getFlight(flightNumber)  
      .subscribe(  
        data => {  
        
          console.log(data);
          this.flightlist=[];
          this.flightlist.push(data)             
        },  
        error => console.log(error));  
  }
  flightupdateform=new FormGroup({  
    flightNumber:new FormControl('',[Validators.required,Validators.min(40000)]),  
    flightModel:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern("^[a-zA-Z0-9]{4,10}$")]),  
    carrierName:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern("^[a-zA-Z ]{6,15}$")]),
    seatCapacity:new FormControl('',[Validators.required,Validators.min(2)])
  });  

  updateFlights(updflight){  
   this.flight=new Flight();   
   this.flight.flightNumber=this.FlightNumber.value;  
   this.flight.flightModel=this.FlightModel.value;  
   this.flight.carrierName=this.CarrierName.value;  
   this.flight.seatCapacity=this.SeatCapacity.value;  
   console.log(this.SeatCapacity.value);  
     
  
   this.flightService.updateFlight(this.flight).subscribe(  
    data => {       
      this.isupdated=true;  
      this.flightService.getFlightList().subscribe(data =>{  
        this.flights =data  
        })  
    },  
    error => console.log(error)); 

  }  
  get FlightNumber(){  
    return this.flightupdateform.get('flightNumber');  
  }  
  
  get FlightModel(){  
    return this.flightupdateform.get('flightModel');  
  }  
  
  get CarrierName(){  
    return this.flightupdateform.get('carrierName');  
  }  
  
  get SeatCapacity(){  
    return this.flightupdateform.get('seatCapacity');  
  }
  changeisUpdate(){  
    this.isupdated=false;  
  } 
}