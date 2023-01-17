import { Injectable } from '@angular/core';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  constructor() { }

  getUsers(){
    let users:User[] = [];

      // Fix Users
      users.push(new User("admin", "admin", "admin@email.com", "soltero", "hombre", "trainning", "Accepted"));
      users.push(new User("victor","victor", "victor@email.com", "soltero", "hombre", "Programming", "Accepted"));
      users.push(new User("mostafa","mostafa", "mostafa@email.com", "soltero", "hombre", "trainning", "Accepted"));

      // Dinamic users
      let names = ["raul","sandra","eloy","irene","pablo","pedro","laura"] 
      let passwords = ["password"];
      let emails = ["email@email.com"];
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
