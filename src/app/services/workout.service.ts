import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Workout} from '../Models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  updateWorkout(workout, coachId) {
    const url = 'http://localhost:8080/workout/updateWorkout/' + coachId;
    return this.http.put<Workout>(url, workout);
  }
  saveWorkout(workout, coachId) {
    const url = 'http://localhost:8080/workout/addWorkout/' + coachId;
    return this.http.post<Workout>(url, workout);
  }

  getWorkoutByCoachId(id) {
    return this.http.get<Array<Workout>>('http://localhost:8080/workout/byCoach/' + id);
  }
}
