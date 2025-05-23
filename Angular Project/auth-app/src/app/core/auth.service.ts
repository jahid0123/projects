import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';

  private readonly tokenKey = 'access_token';
  private roleSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: { email: string; password: string }) {
    return this.http.post<any>('http://localhost:8080/api/auth/login', credentials);
  }

  // signUp(
  //   register: Register
  // ){
  //   return this.http.post<any>('localhost:8081/api/auth/register', register);
  // }
  signUp(register: Register): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, register);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    const payload = JSON.parse(atob(token.split('.')[1]));
    this.roleSubject.next(payload.role);
  }

  getRole() {
    return this.roleSubject.asObservable();
    
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.roleSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUserRole(): string {
    const token = this.getToken();
    if (!token) return '';
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role.toLowerCase();
  }
}
