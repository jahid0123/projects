import { Routes } from '@angular/router';
import { ListOfProductComponent } from './page/list-of-product/list-of-product.component';
import { AddProductComponent } from './page/add-product/add-product.component';

export const routes: Routes = [
    {path: 'productlist', component: ListOfProductComponent},
    {path: 'addproduct', component: AddProductComponent}
];
