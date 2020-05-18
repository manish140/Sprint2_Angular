import { Component, OnInit } from '@angular/core';
import { FlightService, Flight } from '../service/flight.service'
import {Router} from "@angular/router";
import { Observable,Subject } from "rxjs";
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import {DataTablesModule} from 'angular-datatables';  
import { User } from '../user';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private router: Router, private flightService:FlightService) { }
  UsersArray:any[]=[];
  dtOptions:DataTables.Settings={};
  dtTrigger: Subject<any>= new Subject();  
  users: Observable<User[]>;  
  user : User=new User();  
  deleteMessage=false;  
  userlist:any=[];
  isupdated = false;      
  ngOnInit(){
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
  }
  this.flightService.getUserList().subscribe(data =>{  
    this.users =data;  
    this.dtTrigger.next();  
    }) 
}
deleteUser(userId: number) {  
  this.flightService.deleteUser(userId).subscribe(data => {  
    /*console.log(data);  
    this.deleteMessage=true;  
    this.flightService.getFlightList().subscribe(data =>{  
      this.flights =data  
      })
    });*/
    response => {
      console.log(response);
      this.userlist = response;
    }
  });
  }
}
