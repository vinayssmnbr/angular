import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  number=1
  constructor(public services:FirstService){

  }
  // addnumber(){
  //   this.services.addnumber()
  // }

}
