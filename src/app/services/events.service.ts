import { Injectable } from '@angular/core';
import { Event } from '../models/event/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents():Event[] {
    let events:Event[] = [];

    let names = ["Summer Fest","Exposición Dali","Fiesta Mayor","Fira Autos","Gala De Cine"]
    let types = ["concert","cinema","museu","fira","festival"];
    let prices = [10,15,17,20,25];
    let dates = ["2023-05-27","2023-12-08","2023-10-02","2023-05-18","2023-07-30"];
    let locations = ["barcelona","madrid","toledo","valencia","valladolid"];

    for (let i = 0; i < 100; i++) {
      let j:number = Math.trunc(Math.random() * 5);
      events.push(new Event(i, names[j],types[j],dates[j],locations[j],prices[j]));
    }

    return events;
  }
}
