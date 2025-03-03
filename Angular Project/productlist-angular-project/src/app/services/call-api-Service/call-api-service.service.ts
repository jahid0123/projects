import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiServiceService {

  url = 'http://localhost:8081/done';


  constructor(private http: HttpClient) { }

  getDone(): Observable<string>{
    // let params: HttpParams = new HttpParams();
    return this.http.get(this.url, {responseType: 'text'});
  } 
}
