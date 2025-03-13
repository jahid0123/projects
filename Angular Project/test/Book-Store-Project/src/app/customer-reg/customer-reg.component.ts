import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CustomerHeaderComponent } from "../Customer/customer-header/customer-header.component";

// Define the Customer model
export class Customer {
  constructor(
    public customername: string = '',
    public email: string = '',
    public password: string = '',
    public nid: number = 0,
    public phone: string = '',
    public address: string = ''
  ) {}
}

@Component({
  selector: 'app-customer-reg',
  imports: [RouterModule, FormsModule, CommonModule, CustomerHeaderComponent],
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css'],
})
export class CustomerRegComponent {
  customer: Customer = new Customer('', '', '', 0, '', '');
  customers: Customer[] = [];
  isUpdate: boolean = false;
  selectedCustomerIndex: number = -1;

  constructor(private router: Router) {
    this.loadCustomers(); // Load existing customers on component initialization
  }

  // Load customers from localStorage
  loadCustomers() {
    this.customers = JSON.parse(localStorage.getItem('customers') || '[]');
  }

  // Register a new customer
  RegisterCustomer() {
    if (this.validateCustomer(this.customer)) {
      let customers: Customer[] = JSON.parse(localStorage.getItem('customers') || '[]');

      if (this.isUpdate && this.selectedCustomerIndex !== -1) {
        // Updating an existing customer
        customers[this.selectedCustomerIndex] = this.customer;
        alert('Customer updated successfully!');
      } else {
        // Adding a new customer
        customers.push(this.customer);
        alert('Customer registered successfully!');
      }

      localStorage.setItem('customers', JSON.stringify(customers));
      this.loadCustomers(); // Reload the customer list
      this.resetForm(); // Reset form after update or register
      this.router.navigate(['/customer-list']);
    } else {
      alert('Please fix the errors before submitting.');
    }
  }

  // Edit a customer (Load details into the form)
  editCustomer(index: number) {
    this.customer = { ...this.customers[index] }; // Clone object to avoid direct mutation
    this.isUpdate = true;
    this.selectedCustomerIndex = index;
  }

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
    this.selectedCustomerIndex = -1;
  }
}
