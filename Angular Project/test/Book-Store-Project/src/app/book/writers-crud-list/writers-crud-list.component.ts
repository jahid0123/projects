
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CartComponent } from "../../cart/cart.component";


export interface Writer {
  id: number;
  writerName: string;
  bookName: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-writers-crud-list',
  imports: [FormsModule, CommonModule, NgFor, CartComponent],
  templateUrl: './writers-crud-list.component.html',
  styleUrls: ['./writers-crud-list.component.css']
})
export class WritersCrudListComponent implements OnInit {
  writers: Writer[] = []; // Array to store books data
  writer: Writer = {id:0, writerName: '', bookName: '',quantity:0, price: 0, imageUrl: '' }; // Object for form data
  isUpdate: boolean = false; // Flag to check if it’s update mode
  currentIndex: number | null = null; // To store the index of the writer being edited
  modalOpen: boolean = false; // Flag to control modal visibility
  carts: Writer[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const writersFromStorage = localStorage.getItem('writers');
    if (writersFromStorage) {
      this.writers = JSON.parse(writersFromStorage) as Writer[];
    }
    console.log('Writers:', this.writers); // Check if writers are loaded

    let allCarts = JSON.parse(localStorage.getItem('customers') || '[]');
    this.carts =allCarts;
  }

  onSubmit(): void {
    if (this.isUpdate && this.currentIndex !== null) {
      this.writers[this.currentIndex] = { ...this.writer }; // Replace the writer at the given index
    } else {
      this.writers.push(this.writer); // Add a new writer/book
    }
  
    localStorage.setItem('writers', JSON.stringify(this.writers)); // Save updated list to localStorage
    console.log('Updated Writers:', this.writers); // Debugging updated writers
    this.resetForm(); // Reset form
    this.closeModal(); // Close modal after submitting
  }
  
  // Reset the form after submission
  resetForm(): void {
    this.writer = {id:0, writerName: '', bookName: '',quantity:1, price: 0, imageUrl: '' };
    this.isUpdate = false; // Reset update flag
    this.currentIndex = null; // Reset index
  }

  // Method to handle the update action for a writer/book
  
  

   editWriter(writer: Writer, index: number): void {
    this.writer = { ...writer }; // Copy the writer's data into the form
    this.currentIndex = index; // Store the index for updating
    this.isUpdate = true; // Set the flag to indicate update mode
    this.openModal(); // Open modal for editing
  }

  // Method to handle deleting a writer/book from the list
  deleteWriter(writerToDelete: Writer): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.writers = this.writers.filter(writer => writer !== writerToDelete); // Remove the writer
      localStorage.setItem('writers', JSON.stringify(this.writers)); // Save the updated list
      alert('Book deleted successfully'); 
      console.log('Updated Writers after deletion:', this.writers); // Debugging
    }
  }
  

  // Method to display book details (this can be expanded as needed)
  detailsOfBook(writer: Writer): void {
    console.log('Book Details:', writer);
    // You can add routing logic or additional functionality here
  }

  // Method to add book to the cart (you can expand functionality as needed)
  addToCart(writer: Writer): void {

    this.carts.push(writer);
    localStorage.setItem('cart', JSON.stringify(this.carts));
    // Add to cart functionality can be added here
  }

  // Track by function for *ngFor (helps with better performance)
  trackWriter(index: number, writer: Writer): number {
    return writer.id; // Using writer's name as a unique identifier
  }

  // Method to open the modal
  openModal(): void {
    this.modalOpen = true; // Show modal
  }

  // Method to close the modal
  closeModal(): void {
    this.modalOpen = false; // Hide modal
  }
}
