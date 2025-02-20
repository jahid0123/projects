import { Component, OnInit } from '@angular/core';
import { Product } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-product',
  imports: [],
  templateUrl: './list-of-product.component.html',
  styleUrl: './list-of-product.component.css'
})
export class ListOfProductComponent implements OnInit {
  product: Product[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    let products = JSON.parse(localStorage.getItem('product') || '[]');
    this.product = products;
  }

  editUser(product: Product) {
    this.router.navigate(['/addproduct'], {state: {product}});
  }

  deleteUser(products: Product) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.product = this.product.filter((product) => product !== products);
      localStorage.setItem('product', JSON.stringify(this.product));
    }
  }

}
