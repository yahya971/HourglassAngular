import { Component, OnInit } from '@angular/core';
import { Meal } from '../../../Models/meal.model';
import { MealService } from '../../../services/meal.service';
import { ActivatedRoute } from '@angular/router';
import { CoachService } from '../../../services/coach.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meal: Meal ;
  mealId: string;
  coachId: string;
  coachName: string;
  ingredients: string[];
  constructor(private mealService: MealService, private route: ActivatedRoute, private coachService: CoachService) {
    this.route.params.subscribe(params => {
      this.coachId = params['id'];
      this.mealId = params['mealId'];

      localStorage.setItem('coachId', this.coachId);

    });
    this.mealService.getMealByIdAndCoachId(this.mealId, this.coachId).subscribe(value => { this.meal = value; console.log(this.meal); this.ingredients = this.meal.ingredients.split(','); });
    this.coachService.getCoachById(this.coachId).subscribe(value => this.coachName = value.name);
    
  }

  ngOnInit() {
 
  }

}
