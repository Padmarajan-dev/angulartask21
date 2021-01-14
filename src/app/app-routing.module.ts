import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {
    path:'registration',
    loadChildren:()=>import('./registartion/registartion.module').then(m=>m.RegistartionModule)
  },
  {
    path:'welcomepage',
    loadChildren:()=>import('./welcomepage/welcomepage.module').then(m=>m.WelcomepageModule),
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
