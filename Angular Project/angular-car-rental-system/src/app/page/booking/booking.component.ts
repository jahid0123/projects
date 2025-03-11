import { Component, OnInit } from '@angular/core';
import { Book, Car } from '../../app.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  imports: [FormsModule, NgFor],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {


  bookings: Book[] = [];
  cars: Car[] = [];
  car: Car = new Car(0, '', '', 0, false);
  availableCars: Car[] = [];
  selectedCar: Car = new Car(0, '', '', 0, false);
  books: Book = new Book(this.selectedCar, '', '', '', 0);
  isUpdate: boolean = false;
  carid: number | null = null;
  


  constructor(private router: Router) {
      const nav = this.router.getCurrentNavigation();
      if (nav?.extras?.state?.['booking']) {
        this.car = nav.extras.state['booking'];
        this.isUpdate = true;
      }
    }

  ngOnInit(): void {

    let allCar = JSON.parse(localStorage.getItem('car') || '[]');
    this.cars = allCar;
    this.availableCars = allCar;
    this.availableCars = this.availableCars.filter(car => car.isAvailable === true);
    let allBookings = JSON.parse(localStorage.getItem('booking') || '[]');
    this.bookings = allBookings;
  }

  onBooking(): void {
    if (!this.selectedCar || !this.books.cusName || !this.books.cusNID || !this.books.cusContact || !this.books.days) {
      alert("Please fill all fields before booking.");
      return;
    }

    

    // Assign selectedCar to booking
    this.books.car = this.selectedCar;
    this.books.totalAmount = this.selectedCar.carBasePrice * this.books.days;

     // Show confirmation dialog
     if (confirm(`Confirm Booking? \nTotal Price: ${this.books.totalAmount}`)) {
      alert("Car booked successfully!");
    }

    // Push booking to array and save in localStorage
    this.bookings.push(this.books);
    localStorage.setItem('booking', JSON.stringify(this.bookings));

    // Mark car as unavailable
    this.selectedCar.isAvailable = false;

    // Update the cars list and save in localStorage
    this.cars = this.cars.map(car => (car.carId === this.selectedCar.carId ? this.selectedCar : car));
    localStorage.setItem('car', JSON.stringify(this.cars));

   

    // Refresh available cars
    this.availableCars = this.cars.filter(car => car.isAvailable === true);

    // Reset form fields
    this.books = new Book(new Car(0, '', '', 0, false), '', '', '', 0);
    this.selectedCar = new Car(0, '', '', 0, false);
    this.isUpdate = false;
    this.carid = null;
  }

 

  editCar(car: Car, index: number): void {
    this.car = { ...car }; // Clone car object to avoid modifying directly
    this.carid = index; // Store the index of the car being edited
    this.isUpdate = true; // Enable update mode
  }

  deleteBooking(index: number): void {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookings.splice(index, 1); // Remove the car at the given index
      localStorage.setItem('booking', JSON.stringify(this.bookings)); // Save updated list to localStorage
    }

  }

}
