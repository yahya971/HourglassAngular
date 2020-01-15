import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Follow} from '../Models/follow.model';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http: HttpClient) { }

  getAllFollow(programId: number) {
    return this.http.get<Array<Follow>>('http://localhost:8080/follow/byProgramId/' + programId);
  }
  saveFollow(follow: Follow) {
    return this.http.post<Follow>('http://localhost:8080/follow/addFollow', follow);
  }

  getFollowByDay(programId: number, day: string) {
    return this.http.get<Follow>('http://localhost:8080/follow/byProgramIdAndDay/' + programId + '/' + day);
  }
}
