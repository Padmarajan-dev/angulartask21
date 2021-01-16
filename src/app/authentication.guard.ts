import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router:Router)
  {

  }
  canActivate():boolean{
    if(localStorage.length>0 && Object.keys(JSON.parse(localStorage.getItem('PersonalDetails'))).length!=0 && Object.keys(JSON.parse(localStorage.getItem('CompanyDetails'))).length!=0)
    {
    return true;
    }else 
    {
      this.router.navigate(['/registration'])
    }
  }
  
}
