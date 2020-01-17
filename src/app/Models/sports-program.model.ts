import { Workout } from './workout.model';

export class SportsProgram {

  workouts: any[];
  day: any;
  description: string;
  name;
  constructor(day, description, workouts, name) {
    this.day = day;
    this.description = description;
    this.workouts = workouts;
    this.name = name;
  }
}
