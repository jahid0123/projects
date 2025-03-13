import { Component, OnInit } from '@angular/core';
import { Book } from '../../app.component';
import { BookServiceService } from '../../service/book-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  removeBook(id: number): void {
    this.bookService.removeBook(id);
    this.books = this.bookService.getBooks(); // Refresh the list
  }
}