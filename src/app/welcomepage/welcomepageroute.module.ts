import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage.component';

export const route:Routes=[
  {
    path:'',
    component:WelcomepageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class WelcomepagerouteModule { }
