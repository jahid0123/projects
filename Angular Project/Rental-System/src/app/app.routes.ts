import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './car/add-car/add-car.component';
import { RentCarComponent } from './car/rent-car/rent-car.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { ReturnCarComponent } from './car/return-car/return-car.component';


export const routes: Routes = [
  { path: 'add-car', component: AddCarComponent },
  { path: 'car-list', component: CarListComponent },
  { path: 'rent-car', component: RentCarComponent },
  { path: 'return-car', component: ReturnCarComponent },
  { path: '', redirectTo: '/car-list', pathMatch: 'full' }  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
