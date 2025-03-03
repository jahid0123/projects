import { Routes } from '@angular/router';
import { CarComponent } from './page/car/car.component';
import { BookingComponent } from './page/booking/booking.component';

export const routes: Routes = [
    {path: 'add-car', component: CarComponent},
    {path: 'booking', component: BookingComponent}
];
