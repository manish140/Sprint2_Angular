import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService} from '../service/flight.service'
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { User } from '../user';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  constructor(private router:Router,private  authenticateService:AuthenticationService) { }
  

  ngOnInit(): void { 
  }
  
  checkLogin() {
    if (this.password == "" || this.username== "")                        
    { 
        window.alert("Please enter your Username and password"); 
        return false; 
    } 
    if (this.authenticateService.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['login-home/login/home'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
