import { Injectable } from '@angular/core';
import { Book } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private readonly storageKey = 'bookStoreBooks';

  constructor() {}

  getBooks(): Book[] {
    const books = localStorage.getItem(this.storageKey);
    return books ? JSON.parse(books) : [];
  }

  addBook(book: Book): void {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  removeBook(id: number): void {
    let books = this.getBooks();
    books = books.filter((book) => book.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }
}