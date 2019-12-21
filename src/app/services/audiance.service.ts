import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Audiance} from '../Models/audiance.model';

@Injectable({
  providedIn: 'root'
})
export class AudianceService {

  constructor(private http: HttpClient) {
  }

  saveAudiance(audiance: Audiance) {
    this.http.post<Audiance>('http://localhost:8080/coach/addCoach', audiance).subscribe(res => {
      console.log(res);
    });
  }
}
