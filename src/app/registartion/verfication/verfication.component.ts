import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery' ;
import { Companydetail } from 'src/app/models/companydetail';
import { Persondetail } from 'src/app/models/persondetail';
import { RegistrationformService } from 'src/app/services/registrationform.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-verfication',
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.scss']
})
export class VerficationComponent implements OnInit {
  @Output() backto = new EventEmitter<string>();

  verficationform:FormGroup;
  verified:boolean=false;
  personalDetail:Persondetail=new Persondetail();
  companyDetail:Companydetail=new Companydetail();
  constructor(private fb:FormBuilder,private formdataService:RegistrationformService,private router:Router) { 
  }

  ngOnInit(): void {
    this.verficationform = this.fb.group({
      'value1':['',[Validators.required]],
      'value2':['',[Validators.required]],
      'value3':['',[Validators.required]],
      'value4':['',[Validators.required]],
      'value5':['',[Validators.required]],
    });
    this.formdataService.personaldetails.subscribe(res=>{
      this.personalDetail.fullName = res.fullName;
      this.personalDetail.country=res.country;
      this.personalDetail.gender=res.gender;
      this.personalDetail.state=res.state;
      this.personalDetail.mobile=res.mobile;
    });

    this.formdataService.Companydetails.subscribe(res=>{
      this.companyDetail.companyName=res.companyName;
      this.companyDetail.emailid=res.emailid;
      this.companyDetail.imgurl=res.imgurl;
      this.companyDetail.jobtitle=res.jobtitle;
      this.companyDetail.yearsofexperience=res.yearsofexperience;
    });
  }

  backtoprevious()
  {
    this.backto.emit();
  }
//verify & store all registrationdetails in localstorage
  verify()
  {  
    this.formdataService.verified.next(true);
    localStorage.setItem("PersonalDetails",JSON.stringify(this.personalDetail));
    localStorage.setItem("CompanyDetails",JSON.stringify(this.companyDetail));
    if(Object.keys(JSON.parse(localStorage.getItem('PersonalDetails'))).length!=0 && Object.keys(JSON.parse(localStorage.getItem('CompanyDetails'))).length!=0)
    {
    Swal.fire('Yay!!', 'You are Registered Successfully', 'success').then(res=>{
      if(res.isConfirmed)
      {
        this.router.navigate(['/welcomepage']);
      }
    });
  
    }else  
    {
      Swal.fire('ohh!!', 'Registration failed', 'warning');
    }

  }
}
