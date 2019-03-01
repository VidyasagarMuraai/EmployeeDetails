import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLayoutComponent } from './card-layout.component';
import {AppRoutingModule} from '../app-routing.module';
import { LmsMaterialModule} from '../lms-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [CardLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LmsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class CardLayoutModule { }
