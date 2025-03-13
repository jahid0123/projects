import { Component } from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { Book } from '../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  imports: [FormsModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  book: Book = { id: 0, title: '', author: '', price: 0, description: '' };

  constructor(private bookService: BookServiceService) {}

  addBook(): void {
    this.book.id = Date.now(); // Use timestamp as unique ID
    this.bookService.addBook(this.book);
    this.book = { id: 0, title: '', author: '', price: 0, description: '' }; // Reset form
  }
}

