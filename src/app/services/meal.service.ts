import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../Models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {


  constructor(private http: HttpClient) { }

  getMealByIdAndCoachId(id, coachId) {
    let myurl = "http://localhost:8080/meal/" + id + "/" + coachId;
    return this.http.get<Meal>(myurl);
  }
  updateMeal(meal, coachId) {
    let url="http://localhost:8080/meal/updateMeal/"+coachId
    return this.http.put<Meal>(url,meal);
  }
  saveMeal(meal,coachId) {
    let myurl = "http://localhost:8080/meal/addMeal/" + coachId;
    return this.http.post<Meal>(myurl, meal);
  }

  getMealById(id) {


  }
}
