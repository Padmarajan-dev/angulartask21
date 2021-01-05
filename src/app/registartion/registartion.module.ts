import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { VerficationComponent } from './verfication/verfication.component';
import { RegistrationComponent } from './registration.component';
import { RegistrationroutingModule } from './registrationrouting.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [PersonaldetailsComponent, CompanydetailsComponent, VerficationComponent, RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationroutingModule,
    CdkStepperModule,
    NgStepperModule,
    Ng2TelInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegistartionModule { }
