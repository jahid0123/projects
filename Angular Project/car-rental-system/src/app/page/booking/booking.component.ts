import { Component, OnInit } from '@angular/core';
import { Book, Car } from '../../app.component';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-booking',
  imports: [NgFor, NgModel],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{


  bookings: Book[] = [];
  availableCars: Car[] = [];

  ngOnInit(): void {

    let allCar = JSON.parse(localStorage.getItem('car') || '[]');
    this.availableCars = allCar;
    this.availableCars = this.availableCars.filter(car =>car.isAvailable ===true);
  }

}
