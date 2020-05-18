import { Component, OnInit } from '@angular/core';
import { FlightService} from '../service/flight.service'
import { User } from '../user';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
   msg='';
  constructor(private router:Router,private flightService:FlightService) { }
  user: User=new User();

  ngOnInit(): void {
  }
  userSaveForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.pattern("^^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")]),
    userPassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
  
  });
 
  loginUser(){  
    this.user=new User();    
    this.user.userPassword=this.UserPassword.value;  
    this.user.userEmail=this.UserEmail.value;
   this.login();
  }  
  login(){
    this.flightService.loginUser(this.user).subscribe(
      data=>{
        console.log("response received")
        this.router.navigate([''])
      },
      error=>{
        console.log("exception occured");
        this.msg="Email Id or password entered is wrong";

      }
    );
  }
  get UserEmail(){  
    return this.userSaveForm.get('userEmail');  
  } 
  get UserPassword(){  
    return this.userSaveForm.get('userPassword');  
  } 
 
}
