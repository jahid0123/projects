import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookAppoinment, Doctor } from '../../app.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-appoinment',
  imports: [NgFor, FormsModule],
  templateUrl: './book-appoinment.component.html',
  styleUrl: './book-appoinment.component.css'
})
export class BookAppoinmentComponent implements OnInit {


  doctors: Doctor[] = [];
  doctor: Doctor = new Doctor(0, '', '', 0, '', false);
  bookingApp: BookAppoinment[] = [];
  bookAppoinment: BookAppoinment = new BookAppoinment(0, '', 0, new Date, this.doctor);
  bookingID: number | null = null;
  isUpdate = true;



  constructor(private router: Router) {
    
  }
  ngOnInit(): void {

    let allBookings = JSON.parse(localStorage.getItem('appoinmentbook') || '[]');
    this.bookingApp = allBookings;
    let allDoctors = JSON.parse(localStorage.getItem('doctors') || '[]');
    this.doctors = allDoctors;

    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['doctor']) {
      this.doctor = navigation.extras.state['doctor'];
    }
  }



  appoinment(): void {

   
    this.bookAppoinment.doctor = this.doctor;

    this.bookingApp.push(this.bookAppoinment);
    localStorage.setItem('appoinmentbook', JSON.stringify(this.bookingApp));



    // Show confirmation dialog
    if (confirm(`Do you want to Book Appoinment? \nDoctor Fee: ${this.doctor.doctorFee}`)) {
      alert("Booked Appoinment successfully!");
    }


    // Reset form fields
    this.bookAppoinment = new BookAppoinment(0, '', 0, new Date, new Doctor(0, '', '', 0, '', false));
    this.doctor = new Doctor(0, '', '', 0, '', false);
    this.isUpdate = false;
    this.bookingID = null;
  }



  editAppoinment(bookAppoinment: BookAppoinment, index: number): void {
    this.bookAppoinment = { ...bookAppoinment }; // Clone car object to avoid modifying directly
    this.bookingID = index; // Store the index of the car being edited
    this.isUpdate = true; // Enable update mode
  }

  deleteBooking(index: number): void {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookingApp.splice(index, 1); // Remove the car at the given index
      localStorage.setItem('appoinmentbook', JSON.stringify(this.bookingApp)); // Save updated list to localStorage
    }

  }

}
