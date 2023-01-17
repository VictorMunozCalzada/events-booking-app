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


  // Filter
  eventosFiltrado: Event[] = [];
  sizeFilter!: string;
  priceFilter!: number;

  constructor(private eventsService:EventsService) {

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


}