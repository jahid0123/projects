import { Component } from '@angular/core';
import { Car } from '../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  imports: [FormsModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {

  car: Car = new Car('', '', 0, false);
  isUpdate  = false;

  onSubmit(): void{
    let cars: Car[] = [];
    cars.push(this.car);
    localStorage.setItem('car', JSON.stringify(cars));
    this.car = new Car('', '', 0, false);
  }


}
