// car.service.ts
import { Injectable } from '@angular/core';
import { Car } from '../Model/car.model';
import { Rental } from '../Model/rental.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly localStorageKey: string = 'cars'; // Key for storing cars in local storage

  constructor() {
    // Check if cars already exist in local storage, if not, initialize with an empty array
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  // Get all available cars from local storage
  getAvailableCars(): Car[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  // Add a new car to the available cars list
  addCar(newCar: Car): void {
    const cars = this.getAvailableCars();
    newCar.id = this.generateCarId(cars); // Generate a unique ID for the new car
    cars.push(newCar);
    this.saveCarsToLocalStorage(cars);
  }

  // Edit an existing car by its ID
  editCar(updatedCar: Car): void {
    const cars = this.getAvailableCars();
    const carIndex = cars.findIndex(car => car.id === updatedCar.id);
    if (carIndex !== -1) {
      cars[carIndex] = updatedCar;
      this.saveCarsToLocalStorage(cars);
    }
  }

  // Delete a car by its ID
  deleteCarById(carId: number): void {
    const cars = this.getAvailableCars();
    const updatedCars = cars.filter(car => car.id !== carId);
    this.saveCarsToLocalStorage(updatedCars);
  }

  // Rent a car (mark it as rented and save rental details)
  rentCar(rental: Rental): Car | null {
    const cars = this.getAvailableCars();
    const carToRent = cars.find(car => car.id === rental.carId);
    
    if (carToRent && !carToRent.isRented) { // Check if car is available for rent
      carToRent.isRented = true; // Mark the car as rented
      this.saveCarsToLocalStorage(cars); // Save updated car list to local storage
      rental.totalPrice = carToRent.rentPricePerDay * rental.rentalDays; // Calculate total price
      return carToRent;
    }

    return null; // If car is not found or is already rented, return null
  }

  // Return a rented car (mark it as available again)
  returnCar(rentalId: number): void {
    const cars = this.getAvailableCars();
    const rentedCar = cars.find(car => car.isRented && car.id === rentalId);
    
    if (rentedCar) {
      rentedCar.isRented = false; // Mark the car as available again
      this.saveCarsToLocalStorage(cars); // Save updated car list
    }
  }

  // Helper method to generate a unique car ID
  private generateCarId(cars: Car[]): number {
    const maxId = cars.length > 0 ? Math.max(...cars.map(car => car.id)) : 0;
    return maxId + 1; // Return the next available ID
  }

  // Save the updated cars array to local storage
  private saveCarsToLocalStorage(cars: Car[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(cars));
  }
}
