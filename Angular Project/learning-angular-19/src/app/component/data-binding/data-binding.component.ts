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


  

  loanForm!: FormGroup;



  ngOnIniti(): void {
    this.loanForm = this.fb.group({
      postApprovalId: [null],

      appLoanAmount: [0, Validators.required],
      appRepaymentTenure: [0, Validators.required],
      appLoanMoratorium: [0],
      appProfitRate: [0],
      appProcessingFees: [0],
      appEarlySettlementFees: [0],
      loanContractNo: [''],

      disbursementDate: [null],
      disbursementAmount: [0],
      disMaturityDate: [null],
      disInterestRate: [0],
      disLoanTenure: [0],
      moratoriumPeriod: [0],
      moratoriumDate: [null],
      disFirstRepaymentDate: [null],
      disMonthlyInstallAmount: [0],

      ppDisbursementDate: [null],
      ppDisbursementAmount: [0],

      restructureContractNo: [''],
      restructureDate: [null],
      restructureAmount: [0],
      restructureDPayReceived: [0],
      restructureMaturityDate: [null],
      restructureInterestRate: [null],
      restructureLoanTenure: [0],
      restructureMonthlyInstallAmount: [0],

      rescheduleContractNo: [''],
      rescheduleDate: [null],
      rescheduleAmount: [0],
      rescheduleDPayReceived: [0],
      rescheduleMaturityDate: [null],
      rescheduleInterestRate: [null],
      rescheduleLoanTenure: [0],
      rescheduleMonthlyInstallAmount: [0],

      writtenOffDate: [null],
      writtenOffAmount: [0],
      principalAmount: [0],
      susAmount: [0],
      unappliedIntAmount: [0],

      securityArrangement: [''],
      customSecurityArrangement: [''],
      tpaStartDate: [null],
      tpaEndDate: [null],
      scheduleRegDate: [null],
      scheduleRigpaDate: [null],
      remarks: [''],
    });
  }

  onSubmitForm(): void {
    debugger
    if (this.loanForm.valid) {
      const formValue = { ...this.loanForm.value }; 

      if (formValue.securityArrangement === 'Other') {
        formValue.securityArrangement = formValue.customSecurityArrangement;
      }

      delete formValue.customSecurityArrangement;

      console.log('Form Data:', formValue);
      
    } else {
      console.log('Form Invalid!');
      this.loanForm.markAllAsTouched(); 
    }
  }
}