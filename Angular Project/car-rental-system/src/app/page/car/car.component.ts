import { Component, OnInit } from '@angular/core';
import { Car } from '../../app.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-car',
  imports: [FormsModule, NgFor, NgIf, NgClass],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  car: Car = new Car(0, '', '', 0, false);
  currentIndex: number | null = null; // To store the index of the car being edited
  isUpdate = false;
  modalOpen = false; // Flag to control modal visibility

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['add-car']) {
      this.car = nav.extras.state['add-car'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    let allCar = JSON.parse(localStorage.getItem('car') || '[]');
    this.cars = allCar;
  }

  onSubmit(): void {
    if (this.isUpdate && this.currentIndex !== null) {
      // Update existing car if it's an update form
      this.cars[this.currentIndex] = { ...this.car }; // Replace the car at the given index
    } else {
      // Add new car
      this.cars.push(this.car);
    }

    localStorage.setItem('car', JSON.stringify(this.cars)); // Save to localStorage
    this.car = new Car(0, '', '', 0, false); // Reset form
    this.currentIndex = null; // Reset index
    this.isUpdate = false; // Reset update flag
    this.closeModal(); // Close modal
  }

  editCar(car: Car, index: number): void {
    this.car = { ...car }; // Copy the car data into the form
    this.currentIndex = index; // Store the index for updating
    this.isUpdate = true; // Set the flag to indicate update mode
    this.openModal(); // Open the modal
  }

  deleteCar(index: number): void {
    if (confirm('Are you sure you want to delete this car?')) {
      this.cars.splice(index, 1); // Remove the car at the given index
      localStorage.setItem('car', JSON.stringify(this.cars)); // Save updated list to localStorage

    }
  }

  openModal(): void {
    this.modalOpen = true; // Show the modal
  }

  closeModal(): void {
    this.modalOpen = false; // Hide the modal
  }
}
