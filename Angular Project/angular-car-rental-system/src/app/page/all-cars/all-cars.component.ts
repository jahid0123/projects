import { Component, OnInit } from '@angular/core';
import { Car } from '../../app.component';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-cars',
  imports: [MatCardModule, MatButtonModule, NgFor],
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})
export class AllCarsComponent implements OnInit{
  
  aviableCars: Car[] = [];

  constructor(private router: Router){

  }

  ngOnInit(): void {
    
    let allCars = JSON.parse(localStorage.getItem('car') || '[]');
    this.aviableCars = allCars;
    this.aviableCars = this.aviableCars.filter(car => car.isAvailable === true);
    
  }

  bookCars(car: Car): void {
    this.router.navigate(['/booking'], { state: { car: car } });
  }
  



}
