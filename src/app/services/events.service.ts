import { Injectable } from '@angular/core';
import { Event } from '../models/event/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents():Event[] {
    let camisetas:Event[] = [];

    let names = ["rytrt","rdedytrt","ds","ss","deded"]
    let types = ["concert","cinema","museu","fira","festival"];
    let prices = [10,15,17,20,25];
    let dates = ["27/05/2023","12/08/2023","03/02/2023","18/10/2023","30/12/2023"];
    let locations = ["barcelona","madrid","sevilla","valencia","valladolid"];

    for (let i = 0; i < 100; i++) {
      let j:number = Math.trunc(Math.random() * 5);
      camisetas.push(new Event(i, names[j],types[j],dates[j],locations[j],prices[j]));
    }

    return camisetas;
  }
}
