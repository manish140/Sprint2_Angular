import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Observable,Subject } from "rxjs";  
import { FormGroup, FormControl } from '@angular/forms';  
@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  private flight = new Flight();
  flights: Observable<Flight[]>;   
  private data;  
  isupdated = false; 
  flightlist:any=[];
  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    
  }
    form=new FormGroup({  
    flightNumber:new FormControl(),  
    flightModel:new FormControl(),  
    carrierName:new FormControl(),  
    seatCapacity:new FormControl(), 
  });


  getFlight(flightNumber){  
    this.flightService.getFlight(flightNumber)  
      .subscribe(  
        data => { 
          this.flightlist=[];
          this.flightlist.push(data)             
        },  
        error => console.log(error));  
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
  searchForm(updflight){  
    this.flight.flightNumber=this.flightNumber.value; 
    this.getFlight(this.flight.flightNumber); 
  }  
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
    return this.form.get('flightNumber');  
  }
  get flightModel(){  
    return this.form.get('flightModel');  
  }  
  
  get carrierName(){  
    return this.form.get('carrierName');  
  }  
  
  get seatCapacity(){  
    return this.form.get('seatCapacity');  
  }
  changeisUpdate(){  
    this.isupdated=false;  
  } 

}
