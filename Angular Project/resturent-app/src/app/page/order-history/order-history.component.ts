import { Component, OnInit } from '@angular/core';
import { Cart, Food, Order } from '../../app.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-order-history',
  imports: [NgFor, NgIf],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit {
 
  orders: Order[] = [];
 
  ngOnInit(): void {
    // Retrieve order history from localStorage, or use an empty array if not found
    let allOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    
    // Ensure that the data retrieved is an array of Order objects
    this.orders = allOrders.map((orderData: { cart: { foodList: Food[]; }; orderID: number; customerName: string; customerContact: string; }) => {
      // Convert the raw order data into an Order object
      const cart = new Cart(orderData.cart.foodList);  // Create Cart object with the foodList
      return new Order(orderData.orderID, orderData.customerName, orderData.customerContact, cart);
    });
  }

}
