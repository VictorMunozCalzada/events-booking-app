import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent {

  @Input() id!:number
  @Input() name!:any
  @Input() type!:string
  @Input() date!:string
  @Input() location!:string
  @Input() price!:number


  @Output() messageEvent = new EventEmitter<{id: number,name: string, type: string,date: string,location: string,price: number}>();


  sendMessage(){
    this.messageEvent.emit({id:this.id,name:this.name,type:this.type,date:this.date,location:this.location,price:this.price
    })
  }

}
