// return-car.component.ts
import { Component } from '@angular/core';
import { CarService } from '../../Services/car.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-return-car',
  imports: [FormsModule],
  templateUrl: './return-car.component.html',
  styleUrls: ['./return-car.component.css']
})
export class ReturnCarComponent {

  rentalId!: number;

  constructor(private carService: CarService) {}

  returnCar(): void {
    if (this.rentalId) {
      this.carService.returnCar(this.rentalId); // Return the car using rentalId
      alert('Car returned successfully!');
    } else {
      Swal.fire('Error', 'Please provide a valid rental ID.', 'error');
    }
  }
}
