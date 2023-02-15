import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(public services:FirstService){

  }
  addnumber(){
    this.services.addnumber()
  }
  

}
