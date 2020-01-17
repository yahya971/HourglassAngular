import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SportsProgramService {

  constructor(private http: HttpClient) { }
  getDayProgramByWeightLossProgram(id) {
    return this.http.get<Array<any>>('http://localhost:8080/sportsProgram/byWeightLossProgram/' + id);
  }


  save(wlpId,program) {
    return this.http.post('http://localhost:8080/sportsProgram/addSports/' + wlpId, program);
  }
}
