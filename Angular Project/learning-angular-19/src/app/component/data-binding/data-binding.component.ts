import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit {
  myForm!: FormGroup;

  firstName: string = "Jahid Ahmed";
  rollNo: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['male', Validators.required],
      skills: this.fb.array([], Validators.required), // checkboxes
      department: ['', Validators.required],
      terms: [false, Validators.requiredTrue] // checkbox (terms)
    });
  }

  // Checkbox change handling
  onCheckboxChange(e: any) {
    const skills: FormArray = this.myForm.get('skills') as FormArray;

    if (e.target.checked) {
      skills.push(this.fb.control(e.target.value));
    } else {
      const index = skills.controls.findIndex(x => x.value === e.target.value);
      if (index !== -1) {
        skills.removeAt(index);
      }
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      alert(JSON.stringify(this.myForm.value, null, 2));
    } else {
      alert('Form is invalid');
    }
  }


  

}
