import { Injectable } from '@angular/core';
import { Event } from '../models/event/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents():Event[] {
    let camisetas:Event[] = [];

    let name = ["Boda","Empresa","Meeting","Exposicion","Festival"];
    let prices = [10,15,17,20,25];

    for (let i = 0; i < 100; i++) {
      let j:number = Math.trunc(Math.random() * 5);
      camisetas.push(new Event(name[j],prices[j]));
    }

    return camisetas;
  }
}
