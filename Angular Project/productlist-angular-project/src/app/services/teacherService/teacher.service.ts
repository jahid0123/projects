import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../../page/teachers/teachers.component';

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

  updateTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>('${this.apiUrl}' +'/'+ '${teacher.id}', teacher);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete<void>(`${this.teacherUrl}/${id}`);
  }
}
