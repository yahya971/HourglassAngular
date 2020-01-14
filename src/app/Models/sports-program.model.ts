import { Workout } from './workout.model';

export class SportsProgram {

  workouts: Workout[];
  day: any;
  description: string;
  constructor(day, description, workouts) {
    this.day = day;
    this.description = description;
    this.workouts = workouts;
  }
}
