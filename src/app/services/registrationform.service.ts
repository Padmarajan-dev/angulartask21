import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Companydetail } from '../models/companydetail';
import { Persondetail } from '../models/persondetail';

@Injectable({
  providedIn: 'root'
})
export class RegistrationformService implements OnInit {
  public personaldetails = new Subject<Persondetail>();
  public Companydetails = new Subject<Companydetail>();

  public profileDetailsFilled =new Subject<boolean>( );
  public companyDetailsFilled =new Subject<boolean>( );
  public verified =new Subject<boolean>( );
  constructor() { 

  }

  ngOnInit()
  {
    this.profileDetailsFilled.next(false);
    this.companyDetailsFilled.next(false);
    this.verified.next(false);
  }
}

