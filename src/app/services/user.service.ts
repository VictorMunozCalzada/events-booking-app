import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { User } from '../models/user/user';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor() {}


  getUserBoard(): User[] {
    let users:User[] = [];

    // Fix Users
    users.push(new User("admin", "admin123", "admin@email.com", "soltero", "hombre", "trainning"));
    users.push(new User("victor","victor", "victor@email.com", "soltero", "hombre", "Programming"));
    users.push(new User("mostafa","mostafa", "mostafa@email.com", "soltero", "hombre", "trainning"));

    // Dinamic users
    let names = ["raul","sandra","eloy","irene","pablo","pedro","laura"] 
    let passwords = ["password1", "password2", "password3", "password4", "password5"];
    let emails = ["email@email.com", "email@email.com", "email@email.com", "email@email.com", "email@email.com"];
    let civil_status = ["Soltero/a","Casado/a","Divorciado/a"];
    let gender = ["Hombre","Mujer","Otros"];
    let interests = ["Juegos","Deportes","Moda"];

    for (let i = 0; i < 17; i++) {
      let j:number = Math.trunc(Math.random() * 5);
      users.push(new User(names[j],passwords[j],emails[j],civil_status[j],gender[j],interests[j]));
    }

    return users;
  }

  addUser(user:User){
    let users:User[] = [];
    users=this.getUserBoard();
    users.push(user);
    console.log(users);
  }

}
