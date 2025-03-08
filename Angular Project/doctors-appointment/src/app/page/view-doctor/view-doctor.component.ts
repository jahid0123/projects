import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Doctor } from '../../app.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-doctor',
  imports: [MatCardModule, MatButtonModule, NgFor],
  templateUrl: './view-doctor.component.html',
  styleUrl: './view-doctor.component.css'
})
export class ViewDoctorComponent implements OnInit{
  
  aviableDoctors: Doctor[] = [];

  constructor(private router: Router){

  }

  ngOnInit(): void {
    
    let allDoctors = JSON.parse(localStorage.getItem('doctors') || '[]');
    this.aviableDoctors = allDoctors;
    this.aviableDoctors = this.aviableDoctors.filter(doctor => doctor.isAvailable === true);
    
  }

  bookAppoinment(doctor: Doctor): void {
    this.router.navigate(['/book-appoinment'], { state: { doctor: doctor } });
  }
  



}
