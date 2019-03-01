import { Component, OnInit } from '@angular/core';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {Router} from '@angular/router';
import * as Highcharts from 'highcharts';
declare var $:any;
@Component({
  selector: 'app-leave-req',
  templateUrl: './leave-req.component.html',
  styleUrls: ['./leave-req.component.css']
})
export class LeaveReqComponent implements OnInit {
  Highcharts = Highcharts;
  remaining_leaves:any;
  applied_leaves:any;
  userid:any;
  startDate:any;
  endDate:any;
  reasonLeave:any;
  noOfLeaves:any;

  constructor(private soapHandler:SOAPHandlerService,private router:Router) {
   
   }

  ngOnInit() {
     //this.userid="2"
     this.userid=localStorage.getItem("userID");
    this.soapHandler.getUserDetailsBasedOnID(this.userid).subscribe(
      (reponse:any)=>{
        let tupleNodes = $.cordys.json.findObjects(reponse, 'USER_DETAILS');
            console.log(tupleNodes);
            this.remaining_leaves=tupleNodes[0].NO_OF_LEAVES_REMAIN;
            this.applied_leaves=tupleNodes[0].NO_OF_LEAVES_APPLIED; 
      }
    )
    
    
  }
  public leaveDetails(){
    const paramObj={
      userID:this.userid,
      start_date:this.startDate,
      end_date:this.endDate,
      reason_leave:this.reasonLeave,
      no_of_leaves:this.noOfLeaves
    };
    this.soapHandler.saveLeaveReqIntoDB(paramObj).subscribe(
      (response) =>{
        console.log("Successfully Inserted"+response);
      },
      (err)=>{
        alert("Leave Request Submitted");
        this.router.navigate(['/select/dashboard']);

      }
    )
  }
  public close(){
    this.router.navigate(['/select/dashboard']); 
  }
  public validation(){
    // alert("Enter");
     var date2 = new Date(this.startDate);
     var date1 = new Date(this.endDate);
     var timeDiff = Math.abs(date2.getTime() - date1.getTime());   
     var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24)); 
     this.noOfLeaves=diffDays;
   }
  
  
  
}
