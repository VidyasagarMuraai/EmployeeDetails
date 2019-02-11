import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveReqComponent } from './leave-req.component';
import {AppRoutingModule} from '../app-routing.module';
import { LmsMaterialModule} from '../lms-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {  FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import * as drilldown from 'Highcharts/modules/drilldown';
import * as highdata from 'Highcharts/modules/data';


@NgModule({
 
  declarations: [LeaveReqComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LmsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    HighchartsChartModule,
    
    
  ],
   providers:[
  
  ]
})
export class LeaveReqModule { 
}
