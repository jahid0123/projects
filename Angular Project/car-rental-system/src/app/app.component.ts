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

  carBrand: string;
  carModel: string;
  carBasePrice: number;
  isAvailable: boolean;

  constructor(carBrand: string, carModel: string, carBasePrice: number, isAvailable: boolean){
    this.carBrand = carBrand;
    this.carModel = carModel;
    this.carBasePrice = carBasePrice;
    this.isAvailable = isAvailable
    ;
  }
}

