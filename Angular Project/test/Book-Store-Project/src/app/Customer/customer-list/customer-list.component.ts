import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Define and export the Customer interface (assuming ID is a number and has other properties)
export interface Customer {
  id: number;
  name: string;
  email: string;
  nid: number;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = []; // Strongly typed array for customers

  constructor(private router: Router) {}

  ngOnInit() {
    const customersFromStorage = localStorage.getItem('customers');
    if (customersFromStorage) {
      this.customers = JSON.parse(customersFromStorage) as Customer[];
    }
  }

  // Track function for optimizing list rendering
  trackCustomer(index: number, customer: Customer): number {
    return customer.id;
  }

  editCustomer(customer: Customer) {
     this.router.navigate(['/customer-reg'], { state: { customer } });
    this.router.navigate(['/customerCRUD'], { state: { customer } });
   
  }

  deleteCustomer(customerToDelete: Customer) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customers = this.customers.filter(customer => customer !== customerToDelete);
      localStorage.setItem('customers', JSON.stringify(this.customers));
      alert('Customer deleted successfully');
    }
  }
}
