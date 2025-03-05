import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Car } from '../../app.component';

declare var bootstrap: any; // Bootstrap modal handling

@Component({
  selector: 'app-booking',
  imports: [FormsModule, NgFor],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
 
  availableCars: Car[] = [];

  rentalForm: FormGroup;
  totalPrice = 0;
  selectedCarDetails: any;

  constructor(private fb: FormBuilder) {
    this.rentalForm = this.fb.group({
      customerName: ['', Validators.required],
      customerID: ['', Validators.required],
      customerContact: ['', Validators.required],
      days: [1, [Validators.required, Validators.min(1)]],
      selectedCar: ['', Validators.required]
    });
  }

  ngOnInit() {
    let allCar = JSON.parse(localStorage.getItem('car') || '[]');
    // this.availableCars = allCar;
    // this.availableCars = this.availableCars.filter(car => car.isAvailable === true);
    this.availableCars = allCar.filter((car: { isAvailable: string | boolean; }) => car.isAvailable == "true" || car.isAvailable === true);


  }

  calculateTotalPrice() {
    const days = this.rentalForm.value.days || 0;
    const selectedCarID = this.rentalForm.value.selectedCar;

    this.selectedCarDetails = this.availableCars.find(car => car.carId === selectedCarID);
    if (this.selectedCarDetails) {
      this.totalPrice = this.selectedCarDetails.basePricePerDay * days;
    } else {
      this.totalPrice = 0;
    }
  }

  confirmRental() {
    if (this.rentalForm.valid) {
      this.calculateTotalPrice();
      let modal = new bootstrap.Modal(document.getElementById('confirmModal'));
      modal.show();
    }
  }

  submitRental() {
    const rentalData = {
      customer: this.rentalForm.value.customerName,
      customerID: this.rentalForm.value.customerID,
      customerContact: this.rentalForm.value.customerContact,
      days: this.rentalForm.value.days,
      car: this.selectedCarDetails,
      totalPrice: this.totalPrice
    };

    // Save rental data to Local Storage
    let rentals = JSON.parse(localStorage.getItem('rentals') || '[]');
    rentals.push(rentalData);
    localStorage.setItem('rentals', JSON.stringify(rentals));

    alert('Rental confirmed successfully!');
    this.rentalForm.reset();
    this.totalPrice = 0;
  }
}

