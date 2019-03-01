import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food.component';
import {AppRoutingModule} from '../app-routing.module';
import { LmsMaterialModule} from '../lms-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LmsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class FoodModule { }
