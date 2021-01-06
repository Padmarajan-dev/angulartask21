import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {
  username:string;
  constructor() { }

  ngOnInit(): void {
    let personaldetails = JSON.parse(localStorage.getItem('PersonalDetails'));
    this.username = personaldetails.fullName;
  }

}
