// car-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CarService } from '../../Services/car.service';
import { Car } from '../../Model/car.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car = new Car(0, '', '', 0);
  showModal: boolean = false;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars = this.carService.getAvailableCars(); // Get cars from service
  }

  trackCar(index: number, car: Car) {
    return car.id;
  }

  // Open the modal to edit car details
  openEditModal(car: Car): void {
    this.selectedCar = { ...car }; // Prepopulate selected car details
    this.showModal = true; // Show modal
  }

  // Close the modal
  closeEditModal(): void {
    this.showModal = false; // Hide modal
  }

  // Edit the car details
  editCar(): void {
    if (this.selectedCar && this.selectedCar.id) {
      this.carService.editCar(this.selectedCar); // Update car in service/localStorage
      this.cars = this.carService.getAvailableCars(); // Refresh the list
      this.closeEditModal(); // Close the modal after editing
    } else {
      Swal.fire('Error', 'Invalid car data, please try again.', 'error');
    }
  }

  // Delete car with confirmation
  deleteCar(carId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this car!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carService.deleteCarById(carId); // Delete car by ID
        this.cars = this.carService.getAvailableCars(); // Refresh the list
        Swal.fire('Deleted!', 'The car has been deleted.', 'success');
      }
    });
  }
}
