import { Component, OnInit } from '@angular/core';
import { Car } from '../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-return-car',
  imports: [FormsModule],
  templateUrl: './return-car.component.html',
  styleUrl: './return-car.component.css'
})
export class ReturnCarComponent implements OnInit {

  cars: Car[] = [];
  carId: number = 0;


  ngOnInit(): void {

    let allCars = JSON.parse(localStorage.getItem('car') || '[]');
    this.cars = allCars;

  }

  returnCar(): void {
    if (!this.carId || this.carId <= 0) {
        alert('Enter a valid Car ID!!');
        return;
    }

    // Find the car in the stored cars list
    let carToReturn = this.cars.find(car => car.carId === this.carId);

    if (!carToReturn) {
        alert(`Car with ID ${this.carId} not found.`);
        return;
    }

    if (carToReturn.isAvailable) {
        alert(`Car ID ${this.carId} is already available.`);
        return;
    }

    // Mark the car as available
    carToReturn.isAvailable = true;

    // Update the car list with the modified car
    this.cars = this.cars.map(car => (car.carId === this.carId ? carToReturn : car));

    // Remove the booking for this car
    //this.bookings = this.bookings.filter(booking => booking.car.carId !== this.carId);

    // Update local storage
    localStorage.setItem('car', JSON.stringify(this.cars));
    //localStorage.setItem('booking', JSON.stringify(this.bookings));

    // Refresh available cars list
    this.cars = this.cars.filter(car => car.isAvailable === true);

    alert(`Car ID ${this.carId} has been successfully returned and is now available.`);
}

}

