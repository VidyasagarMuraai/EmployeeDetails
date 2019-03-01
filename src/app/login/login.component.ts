import { Component, OnInit } from '@angular/core';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from '../app-routing.module';
import {Router} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loginID:any;
  username:any;
  val:any;
  Id:any;
  role:any;

  
 

  successlogin:any;
  ngOnInit() {
    this.route.navigate(['/login']);
     
      this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        
      });
  

  }
  get f() { return this.registerForm.controls; }

  constructor(private soapService:SOAPHandlerService,private route:Router,private formBuilder: FormBuilder ){
  }
  onSubmit() {
    
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }


}
checkValidUser(){
 
  this.soapService.getUserLoginFromCordys(this.registerForm.controls.username.value,this.registerForm.controls.password.value).subscribe(
     (response:any) =>{
      let tupleNodes = $.cordys.json.findObjects(response, 'USER_LOGIN');
      console.log(tupleNodes);
      if(tupleNodes.length<=0){
           alert("Invalid User Id");
           return false;
      }
      this.val=tupleNodes[0].count_user;
      this.Id=tupleNodes[0].USER_ID;
      this.role=tupleNodes[0].USER_ROLE;
      localStorage.setItem("userID",this.Id);
      localStorage.setItem("userRole",this.role);
      localStorage.setItem("userName",this.registerForm.controls.username.value);
      if(this.val=="0")
			{
        alert("User Id not Activated");
        return false;
      }
      if(this.registerForm.controls.username.value=="" && this.registerForm.controls.password.value=="")
			{
			  alert("Username and password cannot be blank");
			  return false;
      }
      localStorage.setItem("loginDisplay","show");
      this.route.navigate(['/select/dashboard']); 
      
      
     },
     (err)=>{

    }
  )
}
 
}
