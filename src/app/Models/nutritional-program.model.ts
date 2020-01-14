import { Meal } from './meal.model';


export class NutritionalProgram {
  day: any;
  description: string;
  mealsNumber: number;
  meals: Meal[];
  constructor(day, description, mealsNumber, meals) {
    this.day = day;
    this.description = description;
    this.mealsNumber = mealsNumber;
    this.meals = meals;
  }
}
