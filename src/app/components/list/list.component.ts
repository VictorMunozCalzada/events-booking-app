import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Event } from '../../models/event/event';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events!: Event[];
  ipp!: number;
  cp!: number;
  modified:boolean=false;


  // Filter
  eventosFiltrado: Event[] = [];
  sizeFilter!: string;
  priceFilter!: number;

  //Event
  id!:number;
  name: any;
  type:any;
  date:any;
  location:any;
  price:any;



  constructor(private eventsService:EventsService,) {

   }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
    this.ipp = 10;
    this.cp = 1;

    this.eventosFiltrado = this.events;
    this.sizeFilter = "";
    this.priceFilter = 30;
  }

  filter(){
    console.log(this.sizeFilter);

    this.eventosFiltrado = this.events.filter(value => {

      if(value.name.indexOf(this.sizeFilter.toUpperCase()) != -1){
        if(value.price <= this.priceFilter)
          return true;
      }
      return false;

    });
  }

  deleteEvent(){
    console.log("deleted");
  }

  modifyEvent(event:any){
    console.log(event.name);
    console.log(event.date);
    this.modified=true;
    this.id = event.id;
    this.name = event.name;
    this.type = event.type;
    this.date = event.date;
    this.location = event.location;
    this.price = event.price;
    
  }

  getEvent(e:any){
  console.log(e);
  console.log(e.name);
  // recorrer
  this.events;
  }

}