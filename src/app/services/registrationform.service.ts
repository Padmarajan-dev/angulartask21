import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Companydetail } from '../models/companydetail';
import { Persondetail } from '../models/persondetail';

@Injectable({
  providedIn: 'root'
})
export class RegistrationformService {
  public personaldetails = new Subject<Persondetail>();
  public Companydetails = new Subject<Companydetail>();
  constructor() { }
}
