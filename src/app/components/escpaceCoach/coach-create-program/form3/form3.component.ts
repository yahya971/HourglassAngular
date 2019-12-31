import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import $ from '../../../../../assets/js/jquery.min';
import { MealService } from '../../../../services/meal.service';
import { WorkoutService } from '../../../../services/workout.service';
import { ActivatedRoute } from '@angular/router';
import { DayMealsAndPrograms } from '../../../../Models/day-meals-and-programs';
import { of } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  mealsTab = [];
  workoutsTab = [];
  selectedDay: number = 1;
  coachId: number;
  day1 = new DayMealsAndPrograms();
  day2 = new DayMealsAndPrograms();
  day3 = new DayMealsAndPrograms();
  day4 = new DayMealsAndPrograms();
  day5 = new DayMealsAndPrograms();
  day6 = new DayMealsAndPrograms();
  day7 = new DayMealsAndPrograms();

  sevenDayForm: any;
  constructor(private mealService: MealService, private workoutService: WorkoutService, private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.sevenDayForm = this.fb.group([]);
    for (let i = 1; i <= 7; i++) {
      this.addDayForm(i);
    }
    console.log(this.sevenDayForm);

  }

  ngOnInit() {
    this.tabs();
    this.route.params.subscribe(value => {
      this.coachId = +value['id'];
      console.log(this.coachId);


      this.mealService.getMealByCoachId(this.coachId).subscribe(
        value => {
        this.mealsTab = value;
        console.log(this.mealsTab);
        this.mealsTab.map( value => {
          this.day1.allMeals.push(value.name);
          this.day2.allMeals.push(value.name);
          this.day3.allMeals.push(value.name);
          this.day4.allMeals.push(value.name);
          this.day5.allMeals.push(value.name);
          this.day6.allMeals.push(value.name);
          this.day7.allMeals.push(value.name);
        });
      });


      this.workoutService.getWorkoutByCoachId(this.coachId).subscribe(value => {
        this.workoutsTab = value; console.log(this.workoutsTab);
        this.workoutsTab.map(value => {
          this.day1.allWorkouts.push(value.name);
          this.day2.allWorkouts.push(value.name);
          this.day3.allWorkouts.push(value.name);
          this.day4.allWorkouts.push(value.name);
          this.day5.allWorkouts.push(value.name);
          this.day6.allWorkouts.push(value.name);
          this.day7.allWorkouts.push(value.name);

        });
        console.log(this.day1);
      });
    });


    this.day1.snacks.push('Hello');

  }
  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
  }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
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

  showDayForm(i) {
    //console.log(i)
    this.selectedDay = i;
  }
  show() {
    console.log(this.sevenDayForm);
  }

  addDayForm(i) {
    const a= this.fb.group({
      nutritionalProgramName: [''],
      nutritionalProgramDescription: [''],
      sportsProgramName: [''],
      sportsProgramDescription:['']


    });
    this.sevenDayForm.addControl('Day' + i, a);

  }

}
