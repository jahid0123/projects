import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookDetailComponent } from "./page/book-detail/book-detail.component";
import { BookListComponent } from "./page/book-list/book-list.component";

@Component({
  selector: 'app-root',
  imports: [
     BookDetailComponent, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-store';
}

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
}

