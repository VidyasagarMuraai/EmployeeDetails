import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighChartsComponent } from './high-charts.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [HighChartsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  providers:[]
})
export class HighChartsModule { }
