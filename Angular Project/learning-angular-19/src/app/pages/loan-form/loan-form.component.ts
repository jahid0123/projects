import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonComponent } from '../../loan/person/person.component';
import { AddressComponent } from '../../loan/address/address.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-form',
  standalone: true, // ✅ This is the missing part
  imports: [
    ReactiveFormsModule,
    PersonComponent,
    AddressComponent, CommonModule, FormsModule
  ],
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css'] // ✅ fixed "styleUrl" to "styleUrls"
})
export class LoanFormComponent implements OnInit {
 loanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      applicant: this.fb.group({
        person: this.createPersonGroup(),
        address: this.createAddressGroup()
      }),
      spouse: this.fb.group({
        person: this.createPersonGroup(),
        address: this.createAddressGroup()
      }),
      guarantors: this.fb.array([]),
      employmentDetails: this.fb.group({
        companyName: ['', Validators.required],
        designation: ['', Validators.required],
        salary: [null, [Validators.required, Validators.min(0)]]
      })
    });
  }

  createPersonGroup(): FormGroup {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      phone: ['']
    });
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    });
  }

  get applicantPerson(): FormGroup {
  return this.loanForm.get('applicant.person') as FormGroup;
}


  get guarantors(): FormArray {
    return this.loanForm.get('guarantors') as FormArray;
  }

  addGuarantor() {
    this.guarantors.push(
      this.fb.group({
        person: this.createPersonGroup(),
        address: this.createAddressGroup()
      })
    );
  }

  removeGuarantor(index: number) {
    this.guarantors.removeAt(index);
  }

  saveLoan() {
    if (this.loanForm.valid) {
      console.log('Loan Data:', this.loanForm.value);
      // Save to local storage or backend here
    } else {
      console.log('Form invalid');
      this.loanForm.markAllAsTouched();
    }
  }
}
