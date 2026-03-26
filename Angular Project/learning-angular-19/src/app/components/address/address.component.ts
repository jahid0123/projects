import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
@Input() addressForm!: FormGroup;
}
