import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddressComponent } from "../../loan/address/address.component";
import { PersonComponent } from "../../loan/person/person.component";

@Component({
  selector: 'app-post-approval-details',
  imports: [ReactiveFormsModule, AddressComponent, PersonComponent, FormsModule, NgSwitch, CommonModule],
  templateUrl: './post-approval-details.component.html',
  styleUrl: './post-approval-details.component.css',
})
export class PostApprovalDetailsComponent implements OnInit {

  selectedColor = 'red';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   @ViewChild('applicantPerson') applicantPerson!: PersonComponent;
  @ViewChild('applicantAddress') applicantAddress!: AddressComponent;
  @ViewChild('spousePerson') spousePerson!: PersonComponent;
  @ViewChild('spouseAddress') spouseAddress!: AddressComponent;

  save() {
    const data = {
      applicant: {
        person: this.applicantPerson.getValue(),
        address: this.applicantAddress.getValue()
      },
      spouse: {
        person: this.spousePerson.getValue(),
        address: this.spouseAddress.getValue()
      }
    };

    localStorage.setItem('formData', JSON.stringify(data));
    console.log('Saved:', data);
    this.applicantAddress.clearForm();
    this.applicantPerson.clearForm();
    this.spousePerson.clearForm();
    this.spouseAddress.clearForm();
  }

  load() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const data = JSON.parse(savedData);
      this.applicantPerson.setValue(data.applicant.person);
      this.applicantAddress.setValue(data.applicant.address);
      this.spousePerson.setValue(data.spouse.person);
      this.spouseAddress.setValue(data.spouse.address);
    }
  }
  // loanForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.loanForm = this.fb.group({
  //     postApprovalId: [null],

  //     appLoanAmount: [0, Validators.required],
  //     appRepaymentTenure: [0, Validators.required],
  //     appLoanMoratorium: [0],
  //     appProfitRate: [0],
  //     appProcessingFees: [0],
  //     appEarlySettlementFees: [0],
  //     loanContractNo: [''],

  //     disbursementDate: [null],
  //     disbursementAmount: [0],
  //     disMaturityDate: [null],
  //     disInterestRate: [0],
  //     disLoanTenure: [0],
  //     moratoriumPeriod: [0],
  //     moratoriumDate: [null],
  //     disFirstRepaymentDate: [null],
  //     disMonthlyInstallAmount: [0],

  //     ppDisbursementDate: [null],
  //     ppDisbursementAmount: [0],

  //     restructureContractNo: [''],
  //     restructureDate: [null],
  //     restructureAmount: [0],
  //     restructureDPayReceived: [0],
  //     restructureMaturityDate: [null],
  //     restructureInterestRate: [null],
  //     restructureLoanTenure: [0],
  //     restructureMonthlyInstallAmount: [0],

  //     rescheduleContractNo: [''],
  //     rescheduleDate: [null],
  //     rescheduleAmount: [0],
  //     rescheduleDPayReceived: [0],
  //     rescheduleMaturityDate: [null],
  //     rescheduleInterestRate: [null],
  //     rescheduleLoanTenure: [0],
  //     rescheduleMonthlyInstallAmount: [0],

  //     writtenOffDate: [null],
  //     writtenOffAmount: [0],
  //     principalAmount: [0],
  //     susAmount: [0],
  //     unappliedIntAmount: [0],

  //     securityArrangement: [''],
  //     customSecurityArrangement: [''],
  //     tpaStartDate: [null],
  //     tpaEndDate: [null],
  //     scheduleRegDate: [null],
  //     scheduleRigpaDate: [null],
  //     remarks: [''],
  //   });
  // }

  // onSubmit(): void {
  //   debugger
  //   if (this.loanForm.valid) {
  //     const formValue = { ...this.loanForm.value }; 

  //     if (formValue.securityArrangement === 'Other') {
  //       formValue.securityArrangement = formValue.customSecurityArrangement;
  //     }

  //     delete formValue.customSecurityArrangement;

  //     console.log('Form Data:', formValue);
      
  //   } else {
  //     console.log('Form Invalid!');
  //     this.loanForm.markAllAsTouched(); 
  //   }
  // }

  
}
