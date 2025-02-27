import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../page/teachers/teachers.component';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  teacherUrl = 'http://192.168.0.219:8080/teachers';

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<any>{

    return this.http.get<Teacher[]>(this.teacherUrl);

  }

  addTeacher(newTeacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.teacherUrl, newTeacher);
  }
}
