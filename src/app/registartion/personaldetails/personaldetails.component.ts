import { AfterContentChecked, AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {Persondetail} from '../../models/persondetail';
import * as $ from 'jquery' 
import { from, Observable, of, Subject } from 'rxjs';
import { RegistrationformService } from 'src/app/services/registrationform.service';

declare var require: any;
const yourhandle= require('countrycitystatejson');
@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit{

  @Output() next = new EventEmitter<string>();
  @Input() counter:number=0;
  gender:string='';
  personalDetailsFilled:boolean=false;
  persondetail:Persondetail=new Persondetail();
  personalDetailsForm:FormGroup;
  country:string='India';
  countryCode:string='in';
  dialCode:string='91';
  flagIcon='flag-icon flag-icon-'+this.countryCode;

  states=[];
  constructor(private fb:FormBuilder,private formdataService:RegistrationformService) {
   }

  //for trigger a company detail form by @output method
  gotoCompanyDetails()
  {

     this.persondetail.fullName = this.f.fullname.value;
     this.persondetail.gender=this.gender;
     this.persondetail.country=this.country;
     this.persondetail.state=this.f.state.value;
     this.persondetail.mobile='+'+this.dialCode+' '+this.f.mobile.value;
     console.log(this.persondetail);
     this.formdataService.personaldetails.next(this.persondetail);
     this.formdataService.profileDetailsFilled.next(true);
     this.next.emit('');
  }

  

  //for get a gender value
  getGender(gender)
  {
   this.gender = gender;
  }
  //getter for get a formcontrol values;
  get f()
  {
    return this.personalDetailsForm.controls;
  }

  onCountryChange(event)
  {
    this.country = event.name;
    this.countryCode=event.iso2;
    this.flagIcon='flag-icon flag-icon-'+this.countryCode;
    this.dialCode = event.dialCode;
    this.states =  Object.keys(yourhandle.getCountryByShort(this.countryCode.toUpperCase()).states);
  }

  ngOnInit(): void {
    this.personalDetailsForm= this.fb.group({
      'fullname':['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      'country':[''],
      'state':['Tamil Nadu'],
      'mobile':['',[Validators.required,Validators.pattern("[0-9 ]{10}")]],
    });
    this.states =  Object.keys(yourhandle.getCountryByShort(this.countryCode.toUpperCase()).states);
  }


}


