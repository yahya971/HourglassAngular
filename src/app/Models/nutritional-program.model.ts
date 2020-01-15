import { Meal } from './meal.model';


export class NutritionalProgram {
  day: any;
  description: string;
  mealsNumber: number;
  meals: any[];
  name: string;
  constructor(day, description, mealsNumber, meals,name) {
    this.day = day;
    this.description = description;
    this.mealsNumber = mealsNumber;
    this.meals = meals;
    this.name=name
  }
}
