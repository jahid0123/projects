import { Routes } from '@angular/router';
import { FoodSectionComponent } from './page/food-section/food-section.component';
import { FoodListComponent } from './page/food-list/food-list.component';
import { OrderComponent } from './page/order/order.component';
import { OrderHistoryComponent } from './page/order-history/order-history.component';

export const routes: Routes = [

    {path: 'food-manage', component: FoodSectionComponent},
    {path: 'food-list', component: FoodListComponent},
    {path: 'order-manage', component: OrderComponent},
    {path: 'history', component: OrderHistoryComponent},
    {path: '**', redirectTo: 'food-list'},

];
