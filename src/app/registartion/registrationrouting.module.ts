import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { RegistrationComponent } from './registration.component';
export const route:Routes=[
  {
    path:'',
    component:RegistrationComponent
  }
]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class RegistrationroutingModule { }
