import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Airport } from '../airport'; 
import { Observable,Subject } from "rxjs";
@Component({
  selector: 'app-view-airport',
  templateUrl: './view-airport.component.html',
  styleUrls: ['./view-airport.component.css']
})
export class ViewAirportComponent implements OnInit {

  
  constructor(private flightService:FlightService) { }
  FlightsArray:any[]=[];
  dtOptions:DataTables.Settings={};
  dtTrigger: Subject<any>= new Subject();  
  airports:Airport[]=[];
  airport : Airport=new Airport();  
  deleteMessage=false;  
  airportlist:any;  
  isupdated = false;      
  ngOnInit() {
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
  }
  this.flightService.getAirportList().subscribe(data =>{  
    this.airports =data;  
    this.dtTrigger.next();  
    })  
}
 
 deleteAirport(airportCode: String) {  
  this.flightService.deleteAirport(airportCode).subscribe(data => {  
    console.log(data);  
    this.deleteMessage=true;  
    this.flightService.getAirportList().subscribe(data =>{  
      this.airports =data  
      })
    });
  }

}
