import { Component, OnInit } from '@angular/core';
import { Book, Car } from '../../app.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-booking-history',
  imports: [NgFor],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.css'
})
export class BookingHistoryComponent implements OnInit {


  bookings: Book[] = [];
  

  ngOnInit(): void {
    let allBookings = JSON.parse(localStorage.getItem('booking') || '[]');
    this.bookings = allBookings;
  }


  deleteBooking(index: number): void {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookings.splice(index, 1); // Remove the car at the given index
      localStorage.setItem('booking', JSON.stringify(this.bookings)); // Save updated list to localStorage
    }

  }

}
