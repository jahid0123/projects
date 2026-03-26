import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() personForm!: FormGroup;  // <-- just input, no initialization here
}
