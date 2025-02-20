import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  
  p: Product = new Product('', 0, 0, new Date(''), new Date(''), '', '', 0);
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['product']) {
      this.p = nav.extras.state['product'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    // These values should be initialized correctly, but let's make sure they are set if you expect them to be
    console.log('CreateUserComponent!!');
  }

  onSubmit(): void {
    // Retrieve users from localStorage
    let products: Product[] = JSON.parse(localStorage.getItem('product') || '[]');
    
    // Update or add a new user
    if (this.isUpdate) {
      // Update the user if sNumber matches
      products = products.map((product) => (product.sNumber === this.p.sNumber ? this.p : product));
    } else {
      // Add a new user to the array
      products.push(this.p);
    }
    
    // Save the updated list of users back to localStorage
    localStorage.setItem('product', JSON.stringify(products));
    
    // Reset the `u` object
    this.p = new Product('', 0, 0, new Date(''), new Date(''), '', '', 0);
    
    // Navigate to the table page
    this.router.navigate(['/productlist']);
  }
}
