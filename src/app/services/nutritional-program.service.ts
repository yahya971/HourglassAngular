import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NutritionalProgramService {

  constructor(private http: HttpClient) { }

  getDayProgramByWeightLossProgram(id) {
    return this.http.get<Array<any>>('http://localhost:8080/nutritionalProgram/byWeightLossProgram/' + id);
  }

  getDayProgramByWeightLossProgramAndDay(id, day) {
    return this.http.get<any>('http://localhost:8080/nutritionalProgram/byWeightLossProgramAndDay/' + id + '/' + day);
  }



  save(wlpId, program) {
    return this.http.post('http://localhost:8080/nutritionalProgram/addNutritional/' + wlpId, program);
  }


}
