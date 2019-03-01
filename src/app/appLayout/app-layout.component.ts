import { Component, OnInit,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatIconModule,MatSidenavModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  loginID:any;
  password:any;
  successlogin:any;
  showDashborad:boolean;
  userName:any;
  ID:any;
  role:any;
  user:boolean;
  admin:boolean;
  constructor(private soapService:SOAPHandlerService,private router:Router){
  }
  ngOnInit() {
    this.showDashborad=false;
    this.userName=localStorage.getItem("userName");
    this.ID=localStorage.getItem("Id");
    this.role=localStorage.getItem("userRole");
    if(this.role=="user"){
        this.user=true;
        this.admin=false;
    }
    if(this.role=="admin"){
        this.admin=true;
        this.user=false;
    }

    
  }
  public createNewUser(){
  
    this.router.navigate(['/select/Newuser']); 

  }
  public empDetails(){
    this.router.navigate(['/select/EmpDetails']); 
  }
  public redirectToHome(){
    this.router.navigate(['/select/dashboard']); 
  }
  public redirectToLogin(){
    this.router.navigate(['/login']); 
  }
  public createLeaveReq(){
    this.router.navigate(['/select/leaveReq']); 
  }
  public matCard(){
    this.router.navigate(['/select/card']);
  }
  public createTravelReq(){
    this.router.navigate(['/select/food']);
  }
}
