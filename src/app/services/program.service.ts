import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Program} from '../Models/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }
  getProgramByCoachId(id) {
    return this.http.get<Array<Program>>('http://localhost:8080/WeightLossProgram/byCoach/' + id );
  }
  getProgramByClientId(id) {
    return this.http.get<Array<Program>>('http://localhost:8080/WeightLossProgram/byClient/' + id);
  }
  getProgramById(id) {
    return this.http.get<Program>('http://localhost:8080/WeightLossProgram/' + id);
  }
  saveProgram(program: any) {
    this.http.post<any>('http://localhost:8080/coach/addCoach', program).subscribe(res => {
      console.log(res);
    });
  }
}
