import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../app.component';


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
    let allCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
    this.customers =allCustomers;
  }

  // Track function for optimizing list rendering
  trackCustomer(index: number, customer: Customer): number {
    return customer.nid;
  }

  editCustomer(customer: Customer) {
     this.router.navigate(['/customer-reg'], { state: { customer } });
    // this.router.navigate(['/customerCRUD'], { state: { customer } });
   
  }

  deleteCustomer(customerToDelete: Customer) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customers = this.customers.filter(customer => customer !== customerToDelete);
      localStorage.setItem('customers', JSON.stringify(this.customers));
      alert('Customer deleted successfully');
    }
  }
}
