import { Component, OnInit } from '@angular/core';
import { BookAppoinment } from '../../app.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-appoinment-history',
  imports: [NgFor],
  templateUrl: './appoinment-history.component.html',
  styleUrl: './appoinment-history.component.css'
})
export class AppoinmentHistoryComponent implements OnInit{
  
  bookings: BookAppoinment[] = [];
  
  ngOnInit(): void {
    let allBookings = JSON.parse(localStorage.getItem('appoinmentbook') || '[]');
    this.bookings = allBookings;
  }


  deleteBooking(index: number): void {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookings.splice(index, 1); // Remove the car at the given index
      localStorage.setItem('appoinmentbook', JSON.stringify(this.bookings)); // Save updated list to localStorage
    }

  }

}
