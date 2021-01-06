import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'registration',
    loadChildren:()=>import('./registartion/registartion.module').then(m=>m.RegistartionModule)
  },
  {
    path:'welcomepage',
    loadChildren:()=>import('./welcomepage/welcomepage.module').then(m=>m.WelcomepageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
