import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DayProgramsService {

  constructor(private http: HttpClient) { }
  getDayProgramByWeightLossProgram(id) {
    return this.http.get<Array<any>>('http://localhost:8080/dayProgram/byWeightLossProgram/' + id);
  }
}

