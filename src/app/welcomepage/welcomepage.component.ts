import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {
  username:string;
  profilePic:string;
  constructor() { }

  ngOnInit(): void {
    let personaldetails = JSON.parse(localStorage.getItem('PersonalDetails'));
    let CompanyDetails = JSON.parse(localStorage.getItem('CompanyDetails'));
    this.username = personaldetails.fullName;
    this.profilePic = CompanyDetails.imgurl;
  }

}
