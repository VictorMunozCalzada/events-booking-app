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

  deleteEvent(e:any){
    this.events.forEach(event => {
      if (event.id==e.id){
        const indexToDelete = this.events.findIndex(i => i.id == e.id);
        this.events.splice(indexToDelete, 1);
        alert('Evento '+(e.id+1)+' eliminado');
      }
    });
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
  this.events.forEach(event => {
    if (event.id==e.id){
      event.name=e.name;
      event.location=e.location;
      event.price=e.price;
      event.date=e.date;
    }
  });
  }

}