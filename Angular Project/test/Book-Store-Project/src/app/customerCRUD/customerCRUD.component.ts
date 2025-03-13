import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

class Customer {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string,
    public nid: number,
    public phone: string,
    public address: string
  ) { }
}

@Component({
  selector: 'app-customer-crud',
  
  imports: [FormsModule, CommonModule],
  templateUrl: './customerCRUD.component.html',
  styleUrls: ['./customerCRUD.component.css']
})
export class CustomerCRUDComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer = new Customer(0,'', '', '', 0,'', '');
  isUpdate = false;

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
    return customer.id;
  }

  onSubmit(): void {
    let customers: Customer[] = JSON.parse(localStorage.getItem('customers') || '[]');

    if (this.isUpdate) {
      customers = customers.map(cust => cust.id === this.customer.id ? this.customer : cust);
      this.isUpdate = false;
    } else {
      this.customer.id = customers.length ? Math.max(...customers.map(cust => cust.id)) + 1 : 1;
      customers.push(this.customer);
    }

    localStorage.setItem('customers', JSON.stringify(customers));
    this.resetForm();
    this.loadCustomers();
  }

  resetForm(): void {
    this.customer = new Customer(0, '', '', '',0, '', '');
    this.isUpdate = false;
  }

  deleteCustomer(customerToDelete: Customer): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customers = this.customers.filter(customer => customer !== customerToDelete);
      localStorage.setItem('customers', JSON.stringify(this.customers));
      alert('Customer deleted successfully');
    }
  }}