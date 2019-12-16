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
}
