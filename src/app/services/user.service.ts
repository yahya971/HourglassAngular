import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  userUrl = 'http://localhost:8080/api/test/user';
  private coachUrl = 'http://localhost:8080/api/test/coach';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, {responseType: 'text'});
  }

  getCoachBoard(): Observable<string> {
    return this.http.get(this.coachUrl, {responseType: 'text'});
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, {responseType: 'text'});
  }
}
