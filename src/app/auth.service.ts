import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email:string, password:string):Observable<Object> {
    return this.http.post('/login', {
      email,
      password
    });
  }

  signUp(email:string, password:string):Observable<Object> {
    return this.http.post('/sign-up', {
      email,
      password
    });
  }
}
