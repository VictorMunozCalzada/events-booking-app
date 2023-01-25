import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { User } from '../models/user/user';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor() {}

  getUserBoard(): any {
    let users:User[] = [];

    // Fix Users
    users.push(new User("admin", "admin123", "admin@email.com", "soltero", "hombre", "trainning", "Accepted"));
    users.push(new User("victor","victor", "victor@email.com", "soltero", "hombre", "Programming", "Accepted"));
    users.push(new User("mostafa","mostafa", "mostafa@email.com", "soltero", "hombre", "trainning", "Accepted"));

    // Dinamic users
    let names = ["raul","sandra","eloy","irene","pablo","pedro","laura"] 
    let passwords = ["password1", "password2", "password3", "password4", "password5"];
    let emails = ["email@email.com", "email@email.com", "email@email.com", "email@email.com", "email@email.com"];
    let civil_status = ["soltero/a","casado/a","divorciado/a"];
    let gender = ["hombre","mujer","otros"];
    let interests = ["Videojocs","Accesoris","Novetats del mercat"];
    let conditions = ["true"];

    for (let i = 0; i < 100; i++) {
      let j:number = Math.trunc(Math.random() * 5);
      users.push(new User(names[j],passwords[j],emails[j],civil_status[j],gender[j],interests[j],conditions[j]));
    }

    return users;
  }

}
