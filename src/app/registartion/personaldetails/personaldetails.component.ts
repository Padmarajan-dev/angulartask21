import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {Persondetail} from '../../models/persondetail';
import * as $ from 'jquery' 
import { from } from 'rxjs';
@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit {
  @Output() next = new EventEmitter<string>();
  gender:string='';
  persondetail:Persondetail=new Persondetail();
  personalDetailsForm:FormGroup;
  flagclass='';
  countrycode='';
  states=[];
  countries=[
    {
    name:'India',
    code:'+91',
    states:[
      "Tamil Nadu",
      "Pune",
      "Maharashtra",
      "Kerala"
    ],
    flag:"flag-icon flag-icon-in"
    },
    {
      name:'Australia',
      code:'+102',
      states:[
        "Quensland",
        "Victoria",
        "Tasmania"
      ],
      flag:"flag-icon flag-icon-au"
    },
    {
      name:'Germany',
      code:'+106',
      states:[
        "Bavaria",
        "hessen"
      ],
      flag:"flag-icon flag-icon-gr"
    },
    {
      name:'us',
      code:'+106',
      states:[
        "California",
        "Alaska",
        "Nevada"
      ],
      flag:"flag-icon flag-icon-us"
    }
];

  constructor(private fb:FormBuilder) { }

  //funtion for create state array for states selectbox by selected coutry value
  onChange(val) {
    let obj = this.countries.find(country=>country.name===val);
    this.states = obj.states;
    this.flagclass = obj.flag;
    this.countrycode = obj.code;
   }
  //for trigger a company detail form by @output method
  gotoCompanyDetails()
  {
  
     this.persondetail.fullName = this.f.fullname.value;
     this.persondetail.gender=this.gender;
     this.persondetail.country=this.f.country.value;
     this.persondetail.state=this.f.state.value;
     this.persondetail.mobile=this.countrycode+' '+this.f.mobile.value;
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
  ngOnInit(): void {
    //default country value
    // let obj = this.countries.find(country=>country.name==='India');
    // this.states = obj.states;
    // this.flagclass = obj.flag;
    // this.countrycode = obj.code;

    this.personalDetailsForm= this.fb.group({
      'fullname':['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      'country':['',[Validators.required]],
      'state':['',[Validators.required]],
      'mobile':['',[Validators.required,Validators.pattern("[0-9 ]{10}")]],
    });
  }

}


