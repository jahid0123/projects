import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonComponent } from '../person/person.component';
import { AddressComponent } from '../address/address.component';
import { ApplicantComponent } from '../applicant/applicant.component';

@Component({
  selector: 'app-spouse',
  imports: [ApplicantComponent, AddressComponent],
  templateUrl: './spouse.component.html',
  styleUrl: './spouse.component.css',
})
export class SpouseComponent implements OnInit {

  
  @ViewChild('person') person!: PersonComponent;
  @ViewChild('address') address!: AddressComponent;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
