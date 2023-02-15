import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  desc=false;
  number=1
  people:any[]=[
    {
      "name":"vinay",
      "id":1
    },
    {
      "name":"adarsh",
      "id":2
    },
    {
      "name":"manish",
      "id":3
    }
  ]

  addNumber(){
    this.number=this.number+1
  }
}
