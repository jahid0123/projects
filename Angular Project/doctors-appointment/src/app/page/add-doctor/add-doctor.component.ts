import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../app.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-add-doctor',
  imports: [FormsModule, NgFor, NgClass],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent implements OnInit {

  doctors: Doctor[] = [];
  doctor: Doctor = new Doctor(0, '', '', 0, '', false);
  currentIndex: number | null = null; // To store the index of the car being edited
  isUpdate = false;
  modalOpen = false; // Flag to control modal visibility

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['add-doctor']) {
      this.doctor = nav.extras.state['add-doctor'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    let allCar = JSON.parse(localStorage.getItem('doctors') || '[]');
    this.doctors = allCar;
  }

  onSubmit(): void {
    if (this.isUpdate && this.currentIndex !== null) {
      // Update existing car if it's an update form
      this.doctors[this.currentIndex] = { ...this.doctor }; // Replace the car at the given index
    } else {
      // Add new car
      if (this.doctor.doctorName === '' || this.doctor.doctorId === 0 || this.doctor.doctorDept === '') {
        alert("Please fill in all required fields");
    } else {
        this.doctors.push(this.doctor);
    }
    
      
    }

    localStorage.setItem('doctors', JSON.stringify(this.doctors)); // Save to localStorage
    this.doctor = new Doctor(0, '', '', 0, '', false); // Reset form
    this.currentIndex = null; // Reset index
    this.isUpdate = false; // Reset update flag
    
  }

  editDoctor(doctor: Doctor, index: number): void {
    this.doctor = { ...doctor }; // Copy the car data into the form
    this.currentIndex = index; // Store the index for updating
    this.isUpdate = true; // Set the flag to indicate update mode

  }

  deleteDoctor(index: number): void {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.doctors.splice(index, 1); // Remove the car at the given index
      localStorage.setItem('doctors', JSON.stringify(this.doctors)); // Save updated list to localStorage

    }
  }

}
