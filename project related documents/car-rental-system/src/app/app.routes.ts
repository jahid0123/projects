import { Routes } from '@angular/router';
import { CarComponent } from './page/car/car.component';
import { BookingComponent } from './page/booking/booking.component';
import { ReturnCarComponent } from './page/return-car/return-car.component';
import { BookingHistoryComponent } from './page/booking-history/booking-history.component';

export const routes: Routes = [
    {path: 'add-car', component: CarComponent},
    {path: 'booking', component: BookingComponent},
    {path: 'return-car', component: ReturnCarComponent},
    {path: 'booking-history', component: BookingHistoryComponent},
    { path: '**', redirectTo: 'add-car' }
];
