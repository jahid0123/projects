import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { PersonComponent } from '../person/person.component';
import { AddressComponent } from '../address/address.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-applicant',
  imports: [ReactiveFormsModule, AddressComponent],
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.css'
})
export class ApplicantComponent implements OnInit{


  @ViewChild('person') person!: PersonComponent;
  @ViewChild('address') address!: AddressComponent;

  constructor(){}

  ngOnInit(): void {
    
  }

}
