import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Customer } from '../app.component';


// Define the Customer model


@Component({
  selector: 'app-customer-reg',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css'],
})
export class CustomerRegComponent {
  customer: Customer = new Customer('', '', '', 0, '', '');
  customers: Customer[] = [];
  isUpdate: boolean = false;
  selectedCustomerIndex: number | null = null;


  constructor(private router: Router) {
     const nav = this.router.getCurrentNavigation();
     if (nav?.extras?.state?.['customer']) {
       this.customer = nav.extras.state['customer'];
       this.isUpdate = true;
     }
   }
 
   ngOnInit(): void {
     this.loadCustomers();
   }
 
   loadCustomers(): void {
     const savedCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
     this.customers = savedCustomers;
   }
 
   trackCustomers(index: number, customer: Customer): number {
     return customer.nid;
   }

  // Register a new customer
  RegisterCustomer() {
    if (this.validateCustomer(this.customer)) {
      
      if (this.isUpdate) {
        // Updating an existing customer
        this.customers = this.customers.map(cust => cust.nid === this.customer.nid ? this.customer : cust);
        alert('Customer updated successfully!');
      } else {
        // Adding a new customer
        this.customers.push(this.customer);
        alert('Customer registered successfully!');
      }

      localStorage.setItem('customers', JSON.stringify(this.customers));
      this.loadCustomers(); // Reload the customer list
      this.resetForm(); // Reset form after update or register
      this.router.navigate(['/customer-list']);
    } else {
      alert('Please fix the errors before submitting.');
    }
  }

  // // Edit a customer (Load details into the form)
  // editCustomer(index: number) {
  //   this.customer = { ...this.customers[index] }; // Clone object to avoid direct mutation
  //   this.isUpdate = true;
  //   this.selectedCustomerIndex = index;
  // }

  // Delete a customer
  deleteCustomer(index: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      let customers: Customer[] = JSON.parse(localStorage.getItem('customers') || '[]');
      customers.splice(index, 1);
      localStorage.setItem('customers', JSON.stringify(customers));
      this.loadCustomers(); // Refresh the list
      alert('Customer deleted successfully!');
    }
  }

  // Validate customer input
  validateCustomer(customer: Customer): boolean {
    if (!customer.customername.trim()) {
      alert('Username is required');
      return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(customer.email.trim())) {
      alert('Please enter a valid email');
      return false;
    }

    if (customer.password.trim().length < 6) {
      alert('Password must be at least 6 characters');
      return false;
    }

    return true;
  }

  // Reset form to default state
  resetForm() {
    this.customer = new Customer('', '', '', 0, '', '');
    this.isUpdate = false;
    // this.selectedCustomerIndex = -1;
  }
}
