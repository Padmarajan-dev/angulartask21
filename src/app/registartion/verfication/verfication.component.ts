import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery' ;
@Component({
  selector: 'app-verfication',
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.scss']
})
export class VerficationComponent implements OnInit {
  @Output() backto = new EventEmitter<string>();
  verficationform:FormGroup;
  constructor(private fb:FormBuilder) { 
  }

  ngOnInit(): void {
    this.verficationform = this.fb.group({
      'value1':['',[Validators.required]],
      'value2':['',[Validators.required]],
      'value3':['',[Validators.required]],
      'value4':['',[Validators.required]],
      'value5':['',[Validators.required]],
    });

  }

  backtoprevious()
  {
    this.backto.emit();
  }
}
