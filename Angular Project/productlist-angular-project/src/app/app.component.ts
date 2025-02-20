import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

export class Product {

  name: string;
  price: number;
  quantity: number;
  purchaseDate: Date;
  sellDate: Date;
  seller: string;
  buyer: string;
  sNumber: number;

  constructor(name: string, price: number, quantity: number, purchaseDate: Date, sellDate: Date, seller: string, buyer: string, sNumber: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.purchaseDate = purchaseDate;
    this.sellDate = sellDate;
    this.seller = seller;
    this.buyer = buyer;
    this.sNumber = sNumber;
  }
}
