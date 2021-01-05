import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.scss']
})
export class CompanydetailsComponent implements OnInit {
  @Output() next = new EventEmitter<string>();
  @Output() back = new EventEmitter<string>();
  imageSrc: string | ArrayBuffer='../../../assets/dummy-image.png';
  constructor() { }

  ngOnInit(): void {
  }

   //for trigger a verfication detail form by @output method
   gotoverfication()
   {
      this.next.emit('');
   }

  //for trigger a previous page
  backtoprevious()
  {
    this.back.emit();
  }

  //func for show image on profile
  preview(event): void {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
}

}
