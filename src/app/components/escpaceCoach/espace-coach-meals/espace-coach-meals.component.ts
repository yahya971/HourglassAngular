import { Component, OnInit } from '@angular/core';
import $ from '../../../../assets/js/jquery.min.js';
import {MealService} from '../../../services/meal.service';
import {Meal} from '../../../Models/meal.model';

@Component({
  selector: 'app-espace-coach-meals',
  templateUrl: './espace-coach-meals.component.html',
  styleUrls: ['./espace-coach-meals.component.css']
})
export class EspaceCoachMealsComponent implements OnInit {
  id: string;
  meals: Array<Meal>;
  breakfasts: Array<Meal> = [];
  lunchs: Array<Meal> = [];
  dinners: Array<Meal> = [];
  snacks: Array<Meal> = [];
  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.tabs();
    this.id = localStorage.getItem('coachId');
    console.log(this.id);
    this.mealService.getMealByCoachId(this.id).subscribe(
      value => {
        this.meals = value;
        console.log(this.meals);
        this.meals.forEach(meal => {
          if (meal.type === 'breakfast') {
            this.breakfasts.push(meal);
          } else if (meal.type === 'lunch') {
            this.lunchs.push(meal);
          } else if (meal.type === 'dinner') {
            this.dinners.push(meal);
          } else {
            this.snacks.push(meal);
          }
        });
        console.log(this.breakfasts);
        console.log(this.lunchs);
        console.log(this.dinners);
        console.log(this.snacks);
      }
    );
  }

  tabs() {
    $('.ttm-tabs').each(function() {
      $(this).children('.content-tab').children().hide();
      $(this).children('.content-tab').children().first().show();
      $(this).find('.tabs').children('li').on('click', function(e) {
        var liActive = $(this).index(),
          contentActive = $(this).siblings().removeClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn('slow');
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
        e.preventDefault();
      });
    });
  }

}
