import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Meal} from '../Models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {


  constructor(private http: HttpClient) { }


  getMealById(id) {

  }

  getMealByCoachId(id) {
    return this.http.get<Array<Meal>>('http://localhost:8080/meal/byCoach/' + id);
  }
}
