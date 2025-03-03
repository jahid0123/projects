import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD


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
    this.isAvailable = isAvailable;
  }
=======
  title = 'car-rental-system';
>>>>>>> 96cda9e967ce3d4d39ede2a9678c34bc70563b9c
}
