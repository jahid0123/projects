import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-rental-system';
}


export class Car{

  carId: number;
  carBrand: string;
  carModel: string;
  carBasePrice: number;
  isAvailable: boolean;

  constructor(carId: number,carBrand: string, carModel: string, carBasePrice: number, isAvailable: boolean){
    this.carId = carId;
    this.carBrand = carBrand;
    this.carModel = carModel;
    this.carBasePrice = carBasePrice;
    this.isAvailable = isAvailable;
  }

}

export class Book{
  car: Car;
  cusName: string;
  cusNID: string;
  cusContact: string;
  days: number;
  totalAmount: number;

  constructor(car: Car, cusName: string, cusNID: string, cusContact: string, days: number){
    this.car = car;
    this.cusName = cusName;
    this.cusNID = cusNID;
    this.cusContact = cusContact;
    this.days = days; 
    this.totalAmount = car.carBasePrice * days;
  }

}
