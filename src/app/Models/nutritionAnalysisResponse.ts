export class NutritionAnalysisResponse {
  calories: string;
  carbKal: string;
  energKcal: string;
  fatKcal: string;
  protKcal: string;
  totalWeight: string;
  dietLabels: string;
  healthLabels: string;
  calcium: string;
  carbs: string;
  cholesterol: string;
  fat: string;
  potassium: string;
  magnessium: string;
  protein: string;
  sugar: string;
  vitE: string;
  vitA: string;
  vitB6: string;
  vitD: string;
  vitK: string;
  water: string;


  constructor(calories: string, carbKal: string, energKcal: string, fatKcal: string, protKcal: string,
              totalWeight: string, dietLabels: string, healthLabels: string, calcium: string, carbs: string,
              cholesterol: string, fat: string, potassium: string, magnessium: string, protein: string, sugar: string,
              vitE: string, vitA: string, vitB6: string, vitD: string, vitK: string, water: string) {
    this.calories = calories;
    this.carbKal = carbKal;
    this.energKcal = energKcal;
    this.fatKcal = fatKcal;
    this.protKcal = protKcal;
    this.totalWeight = totalWeight;
    this.dietLabels = dietLabels;
    this.healthLabels = healthLabels;
    this.calcium = calcium;
    this.carbs = carbs;
    this.cholesterol = cholesterol;
    this.fat = fat;
    this.potassium = potassium;
    this.magnessium = magnessium;
    this.protein = protein;
    this.sugar = sugar;
    this.vitE = vitE;
    this.vitA = vitA;
    this.vitB6 = vitB6;
    this.vitD = vitD;
    this.vitK = vitK;
    this.water = water;
  }
}
