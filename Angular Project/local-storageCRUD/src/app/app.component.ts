import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { CreateUserComponent } from './page/create-user/create-user.component';
import { NavbarComponent } from "./page/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

}

export class User{
  name: string;
  age: number;
  phone: string;
  address: string;

  constructor(name: string, age: number, phone: string, address: string){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }

}
