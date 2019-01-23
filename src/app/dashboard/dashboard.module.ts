import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LmsMaterialModule} from '../lms-material.module';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LmsMaterialModule,
    AppRoutingModule,
   
    
  ]
})
export class DashboardModule { }
