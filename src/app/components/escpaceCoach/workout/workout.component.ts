import { Component, OnInit } from '@angular/core';
import { Workout } from '../../../Models/workout.model';
import { WorkoutService } from '../../../services/workout.service';
import { ActivatedRoute } from '@angular/router';
import { CoachService } from '../../../services/coach.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workout: Workout;
  workoutId: string;
  coachId: string;
  coachName: string;
  equipments: string[];
  constructor(private workoutService: WorkoutService, private route: ActivatedRoute, private coachService: CoachService) {
    this.route.params.subscribe(params => {
      this.coachId = params['id'];
      this.workoutId = params['workoutId'];

      localStorage.setItem('coachId', this.coachId);

    });
    this.workoutService.getWorkoutByIdAndCoachId(this.workoutId, this.coachId).subscribe(value => { this.workout = value;  this.equipments = this.workout.equipment.split(','); });
    this.coachService.getCoachById(this.coachId).subscribe(value => this.coachName = value.name);

  }

  ngOnInit() {
  }

}
