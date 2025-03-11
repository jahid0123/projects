import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resturent-app';
}


export class Food {

  foodId: number;
  foodName: string;
  foodDes: string;
  foodPrice: number;
  isAvailable: boolean;

  constructor(foodId: number, foodName: string, foodDes: string, foodPrice: number, isAvailable: boolean){
    this.foodId = foodId;
    this.foodName = foodName;
    this.foodDes = foodDes;
    this.foodPrice = foodPrice;
    this.isAvailable = isAvailable;
  }
}


export class Cart {
  foodList: Food[] = [];
  totalPrice: number;

  constructor(foodList: Food[]) {
    this.foodList = foodList;
    this.totalPrice = foodList.reduce((total, food) => total + food.foodPrice, 0);
  }
}

export class Order {
  orderID: number;
  customerName: string;
  customerContact: string;
  cart: Cart;

  constructor(orderID: number, customerName: string, customerContact: string, cart: Cart) {
    this.orderID = orderID;
    this.customerName = customerName;
    this.customerContact = customerContact;
    this.cart = cart;
  }
}