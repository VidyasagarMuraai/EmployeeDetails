import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import {AppRoutingModule} from '../app-routing.module';
import { LmsMaterialModule} from '../lms-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {  FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LmsMaterialModule,
    FlexLayoutModule,
    FormsModule,

  ]
})
export class AppLayoutModule { }
