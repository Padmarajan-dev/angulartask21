import { AfterContentChecked, AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {Persondetail} from '../../models/persondetail';
import * as $ from 'jquery' 
import { from, Observable, of, Subject } from 'rxjs';
import { RegistrationformService } from 'src/app/services/registrationform.service';
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
     this.persondetail.country=this.f.country.value;
     this.persondetail.state=this.f.state.value;
     this.persondetail.mobile=this.dialCode+' '+this.f.mobile.value;
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
    console.log(this.countryCode);
  }

  getNumber(event)
  {
    console.log(event);
  }

  ngOnInit(): void {
    this.personalDetailsForm= this.fb.group({
      'fullname':['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      'country':['',[Validators.required]],
      'state':['',[Validators.required]],
      'mobile':['',[Validators.required,Validators.pattern("[0-9 ]{10}")]],
    });

  }


}


