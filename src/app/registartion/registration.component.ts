import { Component, Input, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { RegistrationformService } from '../services/registrationform.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

   profiledetailform:boolean=false;
   companydetailform:boolean=false;
   verified:boolean=false;

  constructor(private formdataService:RegistrationformService) {
    this.formdataService.profileDetailsFilled.subscribe(res=>{
      this.profiledetailform=res;
    });
    this.formdataService.companyDetailsFilled.subscribe(res=>{
      this.companydetailform=res;
    });
    this.formdataService.verified.subscribe(res=>{
      this.verified=res;
    });
  }


  private stepper: Stepper;

  next() {
    this.stepper.next();
  }

  back()
  {
    this.stepper.previous();
  }

  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });
 
  }

}
