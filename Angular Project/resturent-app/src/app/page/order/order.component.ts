import { Component, OnInit } from '@angular/core';
import { Cart, Food, Order } from '../../app.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [FormsModule, NgFor],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  cartFoods: Food[] = [];
  cart: Cart = new Cart(this.cartFoods); // Cart initialized with empty food list
  order: Order = new Order(0, '', '', this.cart); // Initialize order with the current empty cart
  orderList: Order[] = [];

  ngOnInit(): void {
    // Load cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartfoods') || '[]');
    this.cartFoods = cartItems;

    // Load order history from local storage
    let allOrder = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    this.orderList = allOrder;

    // Update the cart's totalPrice based on the cartFoods
    this.updateCartTotalPrice();
  }

  // Method to update the total price of the cart
  updateCartTotalPrice(): void {
    this.cart = new Cart(this.cartFoods);  // Recreate Cart to update totalPrice
  }

  // Method to confirm and process the purchase
  buyFood(): void {
    if (confirm('Are you sure you want to confirm the purchase?')) {
      // Ensure that the order is updated with the latest cart state
      this.order = new Order(
        this.orderList.length + 1,  // Incrementing order ID
        this.order.customerName,
        this.order.customerContact,
        new Cart(this.cartFoods)  // Create a new Cart object with current cartFoods
      );

      // Add the current order to the order history
      this.orderList.push(this.order);

      // Save the updated order history to localStorage
      localStorage.setItem('orderHistory', JSON.stringify(this.orderList));

      // Clear the cart after the purchase
      this.cartFoods = [];
      localStorage.setItem('cartfoods', JSON.stringify(this.cartFoods));

      // Recalculate the total price after clearing the cart
      this.updateCartTotalPrice();

      // Optionally, update UI or display message
      alert('Purchase Confirmed!');

      // Reset the order object for the next purchase
      this.order = new Order(0, '', '', new Cart([]));  // Reset the order object
    }
  }


}
