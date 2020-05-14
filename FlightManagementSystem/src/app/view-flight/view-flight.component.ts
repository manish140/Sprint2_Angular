import { Component, OnInit, Inject} from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';  
import {Router} from "@angular/router";
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import {DataTablesModule} from 'angular-datatables';  

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
  this.flightService.deleteFlight(flightNumber).subscribe(data => {  
    /*console.log(data);  
    this.deleteMessage=true;  
    this.flightService.getFlightList().subscribe(data =>{  
      this.flights =data  
      })
    });*/
    response => {
      console.log(response);
      this.flightlist = response;
    }
  });
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
    flightNumber:new FormControl(),  
    flightModel:new FormControl(),  
    carrierName:new FormControl(),  
    seatCapacity:new FormControl()  
  });  

  updateFlights(updflight){  
   this.flight=new Flight();   
   this.flight.flightNumber=this.flightNumber.value;  
   this.flight.flightModel=this.flightModel.value;  
   this.flight.carrierName=this.carrierName.value;  
   this.flight.seatCapacity=this.seatCapacity.value;  
   console.log(this.seatCapacity.value);  
     
  
   this.flightService.updateFlight(this.flight).subscribe(  
    data => {       
      this.isupdated=true;  
      this.flightService.getFlightList().subscribe(data =>{  
        this.flights =data  
        })  
    },  
    error => console.log(error)); 

  }  
  get flightNumber(){  
    return this.flightupdateform.get('flightNumber');  
  }  
  
  get flightModel(){  
    return this.flightupdateform.get('flightModel');  
  }  
  
  get carrierName(){  
    return this.flightupdateform.get('carrierName');  
  }  
  
  get seatCapacity(){  
    return this.flightupdateform.get('seatCapacity');  
  }
  changeisUpdate(){  
    this.isupdated=false;  
  } 
}