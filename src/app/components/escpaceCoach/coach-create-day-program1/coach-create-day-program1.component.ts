import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramService } from '../../../services/program.service';
import { filter, map } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { WorkoutService } from '../../../services/workout.service';
import { MealService } from '../../../services/meal.service';
import { SportsProgram } from '../../../Models/sports-program.model';
import { NutritionalProgramService } from '../../../services/nutritional-program.service';
import { SportsProgramService } from '../../../services/sports-program.service';
import { NutritionalProgram } from '../../../Models/nutritional-program.model';

@Component({
  selector: 'app-coach-create-day-program1',
  templateUrl: './coach-create-day-program1.component.html',
  styleUrls: ['./coach-create-day-program1.component.css']
})
export class CoachCreateDayProgram1Component implements OnInit {
  id: string;
  myForm: FormGroup;
  sportiveForm: FormGroup;
  nutritionalForm: FormGroup;
  programs: any;
  nextClicked = false;
  isNutritional = false;
  isSportive = false;
  mealsTab = [];
  workoutsTab = [];
  createdBreakfasts = [];
  createdLunches = [];
  createdDinners = [];
  createdSnacks = [];
  createdWorkouts = [];




  constructor(private router: ActivatedRoute, private fb: FormBuilder, private rrouter: Router, private programService: ProgramService, private mealService: MealService, private workoutService: WorkoutService, private nutService: NutritionalProgramService, private sportsService: SportsProgramService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id;
      localStorage.setItem('coachId', this.id.toString());
    });
    this.programService.getProgramByCoachId(this.id).pipe(map(object => object.filter(value => value.client.id != 999))).subscribe(value => {
      this.programs = value;
      console.log(this.programs);

      this.myForm = this.fb.group({
        client: [this.programs[0].client.name],
        type: ['nutritionalProgram'],
        date: []



      });

      this.sportiveForm = this.fb.group({
        name: [],
        description:[]
      })

      this.nutritionalForm = this.fb.group({
        description: [],
        name: []
      })

    });
    this.mealService.getMealByCoachId(this.id).subscribe(value => this.mealsTab = value);
    this.workoutService.getWorkoutByCoachId(this.id).subscribe(value => {
      this.workoutsTab = value;
      console.log(this.workoutsTab);});

  }

  next() {
    this.nextClicked = true;
    let type = this.myForm.value.type;
    if (type == "nutritionalProgram") {

      this.isNutritional = true;
      this.isSportive = false;
    }
    else {
      this.isSportive = true;
      this.isNutritional = false;
      }
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
  getProgramByClient() {
    for (let program of this.programs)
      if (program.client.name == this.myForm.value.client) {
        console.log(program);
        return program;
      }
  }
  submitSportive() {
    let sportsProgram = new SportsProgram(this.myForm.value.date, this.sportiveForm.value.description, this.createdWorkouts, this.sportiveForm.value.name);
    console.log(sportsProgram);
    let wlpId: number = this.getProgramByClient().id;
    console.log(wlpId)
    this.sportsService.save(wlpId, sportsProgram).subscribe(value => {
      console.log(value);
    })
    this.myForm.reset();
    this.sportiveForm.reset();;
    this.nutritionalForm.reset();
    this.isSportive = false;
    this.isNutritional = false;
    this.nextClicked = false;
    this.createdWorkouts = [];
  }
  submitNutritional() {
    let meals = [];
    meals.push(...this.createdSnacks);
    meals.push(...this.createdBreakfasts);
    meals.push(...this.createdLunches);
    meals.push(...this.createdDinners);

    console.log(meals);
    let nutritionalProgram = new NutritionalProgram(this.myForm.value.date, this.nutritionalForm.value.description,meals.length, meals, this.nutritionalForm.value.name);
    let wlpId: number = this.getProgramByClient().id;
    this.nutService.save(wlpId, nutritionalProgram).subscribe(value => {
      console.log(value);
    })
    this.myForm.reset();
    this.sportiveForm.reset();
    this.nutritionalForm.reset();
    this.isSportive = false;
    this.isNutritional = false;
    this.nextClicked = false;
    this.createdSnacks = [];
    this.createdLunches = [];
    this.createdDinners = [];
    this.createdBreakfasts = [];
  }

}
