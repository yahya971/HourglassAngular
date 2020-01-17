import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Program} from '../Models/program.model';
import { WeightLossProgramPogo } from '../Models/weight-loss-program-pogo.class';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }
  getAllPrograms() {
    return this.http.get<Array<Program>>('http://localhost:8080/WeightLossProgram');
  }
  getProgramByCoachId(id) {
    return this.http.get<Array<Program>>('http://localhost:8080/WeightLossProgram/byCoach/' + id );
  }
  getProgramByClientId(id) {
    return this.http.get<Program>('http://localhost:8080/WeightLossProgram/byClient/' + id);
  }
  getProgramById(id) {
    return this.http.get<Program>('http://localhost:8080/WeightLossProgram/' + id);
  }
  saveProgram(program: WeightLossProgramPogo, coachId) {
    this.http.post<WeightLossProgramPogo>('http://localhost:8080/WeightLossProgram/' + coachId, program).subscribe(res => {
      console.log(res);
    });
  }
  getOldProgramsByClientId(id) {
    return this.http.get<Array<Program>>('http://localhost:8080/WeightLossProgram/old/byClient/' + id);
  }

  affecterProgramme(clientId, programId) {
   return this.http.get<String>('localhost:8080/WeightLossProgram/affecter/' + clientId + "/" + programId);
  }



}
