import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doctors-appointment';
}

export class Doctor{
  doctorId: number;
  doctorName: string;
  doctorDept: string;
  doctorFee: number;
  doctorDegree: string;
  isAvailable: boolean;


  constructor(
    doctorId: number,
  doctorName: string,
  doctorDept: string,
  doctorFee: number,
  doctorDegree: string,
  isAvailable: boolean
  ){
    this.doctorId = doctorId;
    this.doctorName = doctorName;
    this.doctorDept = doctorDept;
    this.doctorFee = doctorFee;
    this.doctorDegree = doctorDegree;
    this.isAvailable = isAvailable;
  }
}

export class BookAppoinment{
  appoinmentID: number;
  customerName: string;
  customerAge: number;
  appoinmentDate: Date;
  doctor: Doctor;

  constructor(
    appoinmentID: number,
  customerName: string,
  customerAge: number,
  appoinmentDate: Date,
  doctor: Doctor
  ){
this.appoinmentID = appoinmentID;
this.customerName = customerName;
this.customerAge = customerAge;
this.appoinmentDate = appoinmentDate;
this.doctor = doctor;
  }
}
