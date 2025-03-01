import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachers',
  imports: [FormsModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css',
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = [];

  newTeacher: Teacher = {
    id: 0,
    name: '',
    schoolName: '',
    assignedSubject: '',
    salary: 0,
    joiningDate: new Date(),
    aggressive: false,
    headTeacher: false,
  };

  private modal: bootstrap.Modal | null = null;

  constructor(private teacherServices: TeacherService) {}

  ngOnInit(): void {
    this.fetchTeachers(); // Use fetchTeachers instead of getTeachers
  }

  fetchTeachers(): void {
    this.teacherServices.getTeachers().subscribe(
      (data: Teacher[]) => {
        this.teachers = data;
        console.log('Fetched teachers: ', this.teachers);
      },
      (error) => {
        console.error('Error fetching teachers: ', error);
      },
    );
  }

  addTeacher() {
    console.log('Adding teacher: ', this.newTeacher);

    this.teacherServices.addTeacher(this.newTeacher).subscribe(
      (response) => {
        debugger;
        this.teachers.push(response);
        this.modal?.hide();
        this.resetForm();
      },
      (error) => {
        console.error('Error adding teacher: ', error);
      },
    );
  }

  openModal(): void {
    const modalElement = document.getElementById('teacherModal'); // Corrected ID
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
      this.modal.show();
    }
  }

  resetForm() {
    this.newTeacher = new Teacher(0, '', '', '', 0, new Date(), false, false);
    this.newTeacher = {
      id: 0,
      name: '',
      schoolName: '',
      assignedSubject: '',
      salary: 0,
      joiningDate: new Date(),
      aggressive: false,
      headTeacher: false,
    };
  }

  deleteTeacher(id: number) {
    this.teacherServices.deleteTeacher(id).subscribe(
      () => {
        this.teachers = this.teachers.filter((t) => t.id !== id);
      },
      (error) => {
        console.error('Error deleting teacher: ', error);
      },
    );
  }
}

export class Teacher {
  id: number;
  name: string;
  schoolName: string;
  assignedSubject: string;
  salary: number;
  joiningDate: Date;
  aggressive: boolean;
  headTeacher: boolean;

  constructor(
    id: number,
    name: string,
    schoolName: string,
    assignedSubject: string,
    salary: number,
    joiningDate: Date,
    aggressive: boolean,
    headTeacher: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.schoolName = schoolName;
    this.assignedSubject = assignedSubject;
    this.salary = salary;
    this.joiningDate = joiningDate;
    this.aggressive = aggressive;
    this.headTeacher = headTeacher;
  }
}
