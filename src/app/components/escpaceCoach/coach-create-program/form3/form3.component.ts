import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';
import $ from '../../../../../assets/js/jquery.min';
import { MealService } from '../../../../services/meal.service';
import { WorkoutService } from '../../../../services/workout.service';
import { ActivatedRoute } from '@angular/router';
import { DayMealsAndPrograms } from '../../../../Models/day-meals-and-programs';
import { of } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WeightLossProgramPogo } from '../../../../Models/weight-loss-program-pogo.class';
import { Audiance } from '../../../../Models/audiance.class';
import { NutritionalProgram } from '../../../../Models/nutritional-program.model';
import { SportsProgram } from '../../../../Models/sports-program.model';
import { ProgramService } from '../../../../services/program.service';


@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  prevIndex = 1;
  allMeals = [];
  allWorkouts = [];
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
    private fb: FormBuilder, private programService: ProgramService) {
    this.sevenDayForm = this.fb.group([]);
    for (let i = 1; i <= 7; i++) {
      this.addDayForm(i);
    }


  }

  ngOnInit() {
    this.tabs();
    this.route.params.subscribe(value => {
      this.coachId = +value['id'];


      this.mealService.getMealByCoachId(this.coachId).subscribe(
        value => {
        this.mealsTab = value;
        this.mealsTab.map( value => {
          this.day1.allMeals.push(value.name);
          this.day2.allMeals.push(value.name);
          this.day3.allMeals.push(value.name);
          this.day4.allMeals.push(value.name);
          this.day5.allMeals.push(value.name);
          this.day6.allMeals.push(value.name);
          this.day7.allMeals.push(value.name);
        });
          this.allMeals = Object.assign([], this.day1.allMeals)
      });


      this.workoutService.getWorkoutByCoachId(this.coachId).subscribe(value => {
        this.workoutsTab = value;
        this.workoutsTab.map(value => {
          this.day1.allWorkouts.push(value.name);
          this.day2.allWorkouts.push(value.name);
          this.day3.allWorkouts.push(value.name);
          this.day4.allWorkouts.push(value.name);
          this.day5.allWorkouts.push(value.name);
          this.day6.allWorkouts.push(value.name);
          this.day7.allWorkouts.push(value.name);

        });
        this.allWorkouts = Object.assign([],this.day1.allWorkouts);
      });
    });


 

  }
  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('main-grid').classList.toggle('col-lg-12');
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let idx = event.container.data.indexOf(event.previousContainer.data[event.previousIndex]);
      if (idx != -1) {
        return;
      }
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  

  tabs() {
    $('.ttm-tabs').each(function () {
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

 
 

  addDayForm(i) {
    const a = this.fb.group({
      nutritionalProgramName: [''],
      nutritionalProgramDescription: [''],
      sportsProgramName: [''],
      sportsProgramDescription: [''],
      day:['']


    });
    this.sevenDayForm.addControl('Day' + i, a);

  }
  

      




  save() {
    let form1 = JSON.parse(localStorage.getItem('form1'));
    let form2 = JSON.parse(localStorage.getItem('form2'));
    let objectives = "";
    for (let objective of form1.objectives) {
      
    if (objective)
      objectives += objective.objective + " , ";
  }
    let audiance: Audiance = new Audiance(form1.sex, form1.tailleMax / 2 + form1.tailleMin / 2, form1.poidsMax / 2 + form1.poidsMin / 2, form1.frame, form1.fatStorage, form1.silhouette, form1.overWeightCause);
    let nutritionalPrograms : NutritionalProgram[] = [];
    let sportsPrograms: SportsProgram[] = [];
    let formValue: Array<any> = [];
    formValue.push(this.sevenDayForm.value.Day1);
    formValue.push(this.sevenDayForm.value.Day2);
    formValue.push(this.sevenDayForm.value.Day3);
    formValue.push(this.sevenDayForm.value.Day4);
    formValue.push(this.sevenDayForm.value.Day5);
    formValue.push(this.sevenDayForm.value.Day6);
    formValue.push(this.sevenDayForm.value.Day7);
    
    formValue.forEach((day, i) => {
      
      let snacks = [];
      let breakFasts = [];
      let dinners = [];
      let lunches = [];
      let workouts = [];
      switch (i) {
        case 0: {
          snacks = this.day1.snacks;
          breakFasts = this.day1.breakfasts;
          lunches = this.day1.lunches;
          dinners = this.day1.dinners;
          workouts = this.day1.workouts;
          break;
        }
        case 1: {
          snacks = this.day2.snacks;
          breakFasts = this.day2.breakfasts;
          lunches = this.day2.lunches;
          dinners = this.day2.dinners;
          workouts = this.day2.workouts;
          break;
        }
        case 2: {
          snacks = this.day3.snacks;
          breakFasts = this.day3.breakfasts;
          lunches = this.day3.lunches;
          dinners = this.day3.dinners;
          workouts = this.day3.workouts;
          break;
        }
        case 3: {
          snacks = this.day4.snacks;
          breakFasts = this.day4.breakfasts;
          lunches = this.day4.lunches;
          dinners = this.day4.dinners;
          workouts = this.day4.workouts;
          break;
        }
        case 4: {
          snacks = this.day5.snacks;
          breakFasts = this.day5.breakfasts;
          lunches = this.day5.lunches;
          dinners = this.day5.dinners;
          workouts = this.day5.workouts;
          break;
        }
        case 5: {
          snacks = this.day6.snacks;
          breakFasts = this.day6.breakfasts;
          lunches = this.day6.lunches;
          dinners = this.day6.dinners;
          workouts = this.day6.workouts;
          break;
        }
        case 6: {
          snacks = this.day7.snacks;
          breakFasts = this.day7.breakfasts;
          lunches = this.day7.lunches;
          dinners = this.day7.dinners;
          workouts = this.day7.workouts;
          break;
        }

      }
      let meals = [];
     
        meals.push(...breakFasts);
     
        meals.push(...lunches);
    
        meals.push(...dinners);

      meals.push(...snacks);

      nutritionalPrograms.push(new NutritionalProgram(day.day, day.nutritionalProgramDescription, meals.length, meals, day.nutritionalProgramName));
      sportsPrograms.push(new SportsProgram(day.day, day.sportsProgramDescription, workouts, day.sportsProgramName));

    });


    let wlProgram: WeightLossProgramPogo = new WeightLossProgramPogo(form1.backgroundImage, form1.description, form1.duration, objectives, 2.5, null, form1.name, nutritionalPrograms, sportsPrograms, audiance);
    console.log(wlProgram);
    this.programService.saveProgram(wlProgram, this.coachId);
  }
      

}
