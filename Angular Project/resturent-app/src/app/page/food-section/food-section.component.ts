import { Component, OnInit } from '@angular/core';
import { Food } from '../../app.component';
import { FormsModule, NgModel, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';


@Component({
  selector: 'app-food-section',
  imports: [FormsModule, NgClass, NgFor],
  templateUrl: './food-section.component.html',
  styleUrl: './food-section.component.css'
})
export class FoodSectionComponent implements OnInit {

  foods: Food[] = [];
  food: Food = new Food(0, '', '', 0, false);
  isUpdate = false;
  currentIndex: number | null = null;


  ngOnInit(): void {
    let allFoods = JSON.parse(localStorage.getItem('foods') || '[]');
    this.foods = allFoods;
  }

  saveFood() {
    if (this.isUpdate && this.currentIndex !== null) {
      this.foods[this.currentIndex] = { ...this.food };
    } else {
      this.foods.push(this.food);
    }

    localStorage.setItem('foods', JSON.stringify(this.foods));
    this.food = new Food(0, '', '', 0, false);
    this.isUpdate = false;
    this.currentIndex = null;

  }


  editFood(food: Food, index: number): void {

    this.food = { ...food };
    this.currentIndex = index;
    this.isUpdate = true;

  }


  deleteFood(index: number): void {

    if (confirm('Are you sure you want to delete this car?')) {
      this.foods.splice(index, 1); // Remove the car at the given index
      localStorage.setItem('foods', JSON.stringify(this.foods)); // Save updated list to localStorage
      let allFoods = JSON.parse(localStorage.getItem('foods') || '[]');
      this.foods = allFoods;
    }

  }



}
