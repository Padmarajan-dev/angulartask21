import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomepageComponent } from './welcomepage.component';
import { WelcomepagerouteModule } from './welcomepageroute.module';



@NgModule({
  declarations: [WelcomepageComponent],
  imports: [
    CommonModule,
    WelcomepagerouteModule
  ]
})
export class WelcomepageModule { }
