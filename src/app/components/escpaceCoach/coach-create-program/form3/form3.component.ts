import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  meals = [
    'meal1',
    'meal2',
    'meal3',
    'meal4',
    'meal5',
  ];
  breakfasts = [];
  lunchs = [];
  dinners = [];
  snacks = [];
  workouts = [
    'workout1',
    'workout2',
    'workout3'
  ];
  dayWorkouts = [];
  constructor() { }

  ngOnInit() {
  }
  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
