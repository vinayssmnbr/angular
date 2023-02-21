import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  child="venturepact"
  @Input() count:any
  @Input() parentdata:any;
  @Input() parentdata1:any=null;
  @Output() click=new EventEmitter();
  @Output() click1=new EventEmitter();
  @Output() countUpdatePlus = new EventEmitter()

  num=1
  data={type:"click"}

  fun(){
    console.log("nfwijk")
    this.click.emit()
    this.click1.emit(this.data)
  }





  
  onPlus(type:string){
   type ==='Add' ? this.count++ :this.count--;
  }
}
