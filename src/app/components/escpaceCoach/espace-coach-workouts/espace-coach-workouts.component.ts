import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-coach-workouts',
  templateUrl: './espace-coach-workouts.component.html',
  styleUrls: ['./espace-coach-workouts.component.css']
})
export class EspaceCoachWorkoutsComponent implements OnInit {
  id: string;
  constructor() { }

  ngOnInit() {
    this.id = localStorage.getItem('coachId');
    console.log(this.id);
  }

}
