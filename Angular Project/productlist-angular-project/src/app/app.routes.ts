import { Routes } from '@angular/router';
import { ListOfProductComponent } from './page/list-of-product/list-of-product.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { FlagComponent } from './page/flag/flag.component';
import { HarryPotterComponent } from './page/harry-potter/harry-potter.component';
import { TeachersComponent } from './page/teachers/teachers.component';

export const routes: Routes = [
    {path: 'productlist', component: ListOfProductComponent},
    {path: 'addproduct', component: AddProductComponent},
    {path: 'flag', component: FlagComponent},
    {path: 'harry-portter', component: HarryPotterComponent},
    {path: 'teacher', component: TeachersComponent}
];
