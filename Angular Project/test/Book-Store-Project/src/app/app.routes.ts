import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/booklist/booklist.component'; // Import your BookList component
import { HeaderComponent } from './header/header.component'; // Import your Header component
import { BookCRUDComponent } from './book/book-crud/book-crud.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { AdminComponent } from './adminP/adminHeader/admin.component';
import { RegFormComponent } from './adminP/reg-form/reg-form.component';
import { CustomerCRUDComponent } from './customerCRUD/customerCRUD.component';
import { CatagoryCrudListComponent } from './book/catagory-crud-list/catagory-crud-list.component';
import { DashboardComponent } from './header/dashboard/dashboard.component';
import { IslamiBooklistComponent } from './book/islami-booklist/islami-booklist.component';
import { CustomerHeaderComponent } from './Customer/customer-header/customer-header.component';
import { WritersCrudListComponent } from './book/writers-crud-list/writers-crud-list.component';
import { BookItemsComponent } from './book/book-items/book-items.component';
import { CatagoryComponent } from './book/catagory/catagory.component';
import { CardViewComponent } from './book/card-view/card-view.component';
import { SListComponent } from './slist/slist.component';
import { CustomerListComponent } from './Customer/customer-list/customer-list.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },  // You can set the default route to display the header
  { path: 'booklist', component: BookListComponent },  // Path for the BookList component
  { path: 'bookCRUD', component: BookCRUDComponent },  // Path for the BookCRUD component
  { path: 'customer-reg', component: CustomerRegComponent },
  { path: 'customerCRUD', component: CustomerCRUDComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'category-crud-list', component: CatagoryCrudListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'islami-booklist', component: IslamiBooklistComponent },
  { path: 'customer-header', component: CustomerHeaderComponent },
  { path: 'writers-crud-list', component: WritersCrudListComponent },
  { path: 'book-items', component: BookItemsComponent },
  { path: 'catagory', component: CatagoryComponent },
  { path: 'card-view', component: CardViewComponent },
  { path: 'reg-form', component: RegFormComponent },
  { path: 'admin', component: AdminComponent },
  { path: 's-list', component: SListComponent },
  { path: 'cart', component: CartComponent },
];


