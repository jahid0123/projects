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

    if (this.carId <= 0) {
      alert('Enter invalid Car ID!!');
    } else {

      let carToReturn = this.cars.find(car => car.carId === this.carId);

      if (carToReturn) {
        carToReturn.isAvailable = true;

        // Update the cars array with the modified car
        this.cars = this.cars.map(car => car.carId === this.carId ? carToReturn! : car);

        // Update local storage
        localStorage.setItem('car', JSON.stringify(this.cars));

        // Refresh available cars list
        this.cars = this.cars.filter(car => car.isAvailable === true);

        alert(`Car ID ${this.carId} has been successfully returned and is now available.`);
      } else {
        alert(`Car with ID ${this.carId} not found.`);
      }
    }
  }
}

