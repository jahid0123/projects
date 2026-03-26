import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
})
export class AddressComponent {
   @Input() addressForm = FormGroup;

  // constructor(private fb: FormBuilder) {}
  // ngOnInit(): void {
  //   this.createForm();
  // }

  // createForm() {
  //   this.addressForm = this.fb.group({
  //     village: [''],
  //     postOffice: [''],
  //     thana: [''],
  //     district: [''],
  //   });
  // }

  // getValue() {
  //   return this.addressForm.value;
  // }

  // setValue(data: any) {
  //   this.addressForm.patchValue(data);
  // }

  // clearForm() {
  //   this.addressForm.reset();
  // }
}
