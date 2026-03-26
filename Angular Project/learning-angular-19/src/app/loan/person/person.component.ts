import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-person',
  imports: [ReactiveFormsModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  @Input() personForm = FormGroup;

  // constructor(private fb: FormBuilder) {}
  // ngOnInit(): void {
  //   this.createForm();
  // }

  // createForm() {
  //   this.personForm = this.fb.group({
  //     firstName: [''],
  //     lastName: [''],
  //     dob: [null],
  //     fatherName: [''],
  //     motherName: [''],
  //     phoneNumber: [''],
  //     email: [''],
  //     gender: [''],
  //     maritialStatus: [''],
  //   });
  // }

  // getValue() {
  //   return this.personForm.value;
  // }

  // setValue(data: any) {
  //   this.personForm.patchValue(data);
  // }

  // clearForm() {
  //   this.personForm.reset();
  // }
}
