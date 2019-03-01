import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewuserComponent} from './NewUser/newuser.component';
import {LeaveReqComponent} from './leaveReq/leave-req.component';
import {AppComponent} from './app.component';
import {AppLayoutComponent} from './appLayout/app-layout.component';
import {HighChartsComponent} from './highChart/high-charts.component';
import {CardLayoutComponent} from './card/card-layout.component'
import {FoodComponent} from './FoodAndTravel/food.component'
const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: '',
    redirectTo:'/login',
    pathMatch: 'full'
    
  },
  {
    path: 'select',
    component:AppLayoutComponent,
    children :[
    
      {
        path:'Newuser',
        component:NewuserComponent,
      },
     
      {
      path: 'dashboard',
      component:DashboardComponent,
      },
      {
        path: 'leaveReq',
        component:LeaveReqComponent,
      },
      {
        path: 'main',
        component:AppComponent,
      },
      {
        path: 'card',
        component:CardLayoutComponent,
      },
      {
        path: 'food',
        component:FoodComponent,
      },
    

      

    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
