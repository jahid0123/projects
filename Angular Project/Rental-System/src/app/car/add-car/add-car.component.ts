// add-car.component.ts
import { Component } from '@angular/core';
import { Car } from '../../Model/car.model';
import { CarService } from '../../Services/car.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-car',
  imports: [FormsModule],
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  car: Car = new Car(0, '', '', 0); // Initialize with default values

  constructor(private carService: CarService) {}

  addCar(): void {
    if (this.car.brand && this.car.model && this.car.rentPricePerDay) {
      this.carService.addCar(this.car); // Add car through the service
      this.car = new Car(0, '', '', 0); // Reset the form after adding the car
      alert('Car added successfully!');
    } else {
      Swal.fire('Error', 'Please fill in all the car details.', 'error');
    }
  }
}
