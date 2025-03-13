import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

class Book {
  constructor(
    public id: number,
    public categoryName: string,
    public bookName: string,
    public price: number,
    public imageUrl: string | null 
  ) {}
}

@Component({
  selector: 'app-catagory-crud-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './catagory-crud-list.component.html',
  styleUrls: ['./catagory-crud-list.component.css']
})
export class CatagoryCrudListComponent implements OnInit {
  book: Book = new Book(0, '', '', 0, null);
  isUpdate = false;
  imageUrl: string | ArrayBuffer | null = null;
  books: Book[] = [];

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['book']) {
      this.book = nav.extras.state['book'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
   
    // Load books from localStorage
    const savedBooks = localStorage.getItem('book');
    if (savedBooks) {
      this.books = JSON.parse(savedBooks);
    }
  }

  onSubmit() {
    let catagories: Book[] = JSON.parse(localStorage.getItem('book') || '[]');

    if (this.isUpdate) {
      catagories = catagories.map((b) => (b.id === this.book.id ? this.book : b));
    } else {
      // Ensure that the ID is unique by checking the existing books
      this.book.id = catagories.length ? Math.max(...catagories.map(b => b.id)) + 1 : 1;
      catagories.push(this.book);
    }

    // Store the updated list in localStorage
    localStorage.setItem('book', JSON.stringify(catagories));

    // Reset form data
    this.book = new Book(0, '', '', 0, null);

    // Reload books from localStorage
    this.books = catagories;
  }

  // Handle image file selection
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Check if file is an image type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.type)) {
        this.book.imageUrl = file;
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Only image files are allowed!');
      }
    }
  }
}
