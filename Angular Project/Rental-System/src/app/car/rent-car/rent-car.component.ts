// rent-car.component.ts
import { Component } from '@angular/core';
import { Rental } from '../../Model/rental.model';
import { Car } from '../../Model/car.model';
import { CarService } from '../../Services/car.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rent-car',
  imports: [FormsModule],
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent {

  
  rental: Rental = new Rental(0, 0, '', 0, '', 0, 0, '');
  availableCars: Car[] = [];

  constructor(private carService: CarService) {
    this.availableCars = this.carService.getAvailableCars(); // Get available cars from the service
  }

  rentCar(): void {
    
    if (this.rental.carId && this.rental.customerName && this.rental.rentalDays && this.rental.address) {
      const rentedCar = this.carService.rentCar(this.rental); // Rent the car
      if (rentedCar) {
        alert(`Rental Successful! Total price: ${rentedCar.totalPrice}`);
      }
    }
  }
}
