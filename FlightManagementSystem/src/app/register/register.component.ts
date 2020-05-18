import { Component, OnInit } from '@angular/core';
import { FlightService} from '../service/flight.service'
import { User } from '../user';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private flightService:FlightService) { }
  user: User=new User();
  submitted=false;
  ngOnInit(): void {
    this.submitted=false;
  }
  userSaveForm=new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern("^[a-zA-Z0-9]{5,15}$")]),
    userPassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    userPhone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[6789]\\d{9}$")]),
    userEmail:new FormControl('',[Validators.required,Validators.pattern("^^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")]),
  });
  saveUser(saveUser){  
    this.user=new User();    
    this.user.userName=this.UserName.value; 
    this.user.userPassword=this.UserPassword.value;  
    this.user.userPhone=this.UserPhone.value;  
    this.user.userEmail=this.UserEmail.value;  
    this.submitted = true;  
    this.save();  
  }  
  save(){
    this.flightService.addUser(this.user)  
    .subscribe(data =>{
       console.log(data)
       this.router.navigate(['']);
    },
     error => console.log(error));  
  this.user= new User();  
  } 
  get UserName(){  
    return this.userSaveForm.get('userName');  
  }  
  get UserPassword(){  
    return this.userSaveForm.get('userPassword');  
  }  
  
  get UserPhone(){  
    return this.userSaveForm.get('userPhone');  
  }  
  
  get UserEmail(){  
    return this.userSaveForm.get('userEmail');  
  } 
  addUserForm(){  
    this.submitted=true;
    this.userSaveForm.reset();  
  }   

}
