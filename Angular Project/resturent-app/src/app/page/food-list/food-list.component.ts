import { Component, OnInit } from '@angular/core';
import { Food } from '../../app.component';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-food-list',
  imports: [NgFor],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent implements OnInit{
  
  foods: Food[] = [];

  carts: Food[] = [];
  
  ngOnInit(): void {
    let allFoods = JSON.parse(localStorage.getItem('foods') || '[]');
    this.foods = allFoods;
    this.foods = this.foods.filter(food => food.isAvailable === true);

    let cartItem = JSON.parse(localStorage.getItem('cartfoods') || '[]');
    this.carts = cartItem;
  }

  addToCart(food: Food){

    this.carts.push(food);
    localStorage.setItem('cartfoods', JSON.stringify(this.carts));
        

  }

}
