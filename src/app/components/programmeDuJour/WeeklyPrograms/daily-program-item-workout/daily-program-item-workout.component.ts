import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-program-item-workout',
  templateUrl: './daily-program-item-workout.component.html',
  styleUrls: ['./daily-program-item-workout.component.css']
})
export class DailyProgramItemWorkoutComponent implements OnInit {
  @Input() workout: any;
  constructor() { }

  ngOnInit() {
  }

}
