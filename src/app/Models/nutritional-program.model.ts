import { Meal } from './meal.model';


export class NutritionalProgram {
  id: number;
  day: string; //should be date though
  description: string;
  mealsNumber: number;
  meals: Meal[];
  
}
