import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiUrl = 'https://hp-api.onrender.com/api/spells';

  

  constructor(private http: HttpClient) {
  
  }
  getSpells(): Observable<any>{

    return this.http.get<any[]>(this.apiUrl);
  }

 


   
}
