import { NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { Register } from '../../../models/register';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  register: Register = new Register('', '', '', '', '', '');
  roles: string[] = ['ADMIN', 'TEACHER', 'STUDENT'];
  submitted = false;
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.submitted = true;
    this.auth.signUp(this.register).subscribe({
      next: (res) => {
        console.log('User registered successfully:', res);
        this.router.navigate(['/login']); // Navigate after success
      },
      error: (err) => {
        console.error('Registration failed:', err);
        this.errorMessage = err.error.message || 'Registration failed. Please try again.';
      }
    });
  }
}
