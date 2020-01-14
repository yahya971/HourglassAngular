import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MealService } from '../../../services/meal.service';
import {NutritionAnalysisRequest} from '../../../Models/nutritionAnalysisRequest';
import {NutritionAnalysisService} from '../../../services/nutrition-analysis.service';
import {NutritionAnalysisResponse} from '../../../Models/nutritionAnalysisResponse';

@Component({
  selector: 'app-coach-create-meal',
  templateUrl: './coach-create-meal.component.html',
  styleUrls: ['./coach-create-meal.component.css']
})
export class CoachCreateMealComponent implements OnInit {
  nutritionalAlalysisRequest: NutritionAnalysisRequest;
  nutritionalAnalysisResponse: NutritionAnalysisResponse;
  id: string;
  myForm: FormGroup;
  imageString: any;
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private mealService: MealService,
              private rrouter: Router, private nutritionAnalysisService: NutritionAnalysisService) { }

  ngOnInit() {
    this.router.params.subscribe(params => { this.id = params.id; });
    localStorage.setItem('coachId', this.id.toString());

    this.myForm = this.fb.group({
      name: [],
      type: [],
      time: [''],
      caloricValue: [],
      description: [''],
      preparationTime: [''],
      ingredients: this.fb.array([]),
      photo: [],
      recipe: [''],
      carbKcal: [],
      energKcal: [],
      fatKcal: [],
      protKcal: [],
      totalWeight: [],
      dietLabels: [],
      healthLabels: [],
      calcium: [],
      carbs: [],
      cholesterol: [],
      fat: [],
      potassium: [],
      magnesium: [],
      protein: [],
      sugar: [],
      vitE: [],
      vitA: [],
      vitB6: [],
      vitD: [],
      vitK: [],
      water: [],
    });
    this.addIngredient();
    // console.log(this.myForm.value);

  }

  get ingredientForms() {
    return this.myForm.get('ingredients') as FormArray;
  }

  addIngredient() {

    const ingredient = this.fb.group({
      ingredient: []
    });

    this.ingredientForms.push(ingredient);
    console.log(this.myForm.value);
  }

  deleteIngredient(i) {
    this.ingredientForms.removeAt(i);
  }

  convertImage(imageUrl) {
    var file: any = imageUrl.target.files[0];

    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.imageString = myReader.result;

    }
    myReader.readAsDataURL(file);
  }

  onChangeFile($event) {
    this.convertImage($event);
  }

  submitFormMeal() {
    /*this.nutritionalAlalysisRequest = new NutritionAnalysisRequest('SIMPLE SCRAMBLED EGGS', ['4 eggs', '1/2 cup milk',
      '2 tablespoons butter', '1/2 teaspoon salt'], '', '', '' );*/
    let formResult = this.myForm.value;
    const ingredients: string[] = [];
    var ingredientString = '';

    for (let ingredient of this.myForm.value.ingredients)
      if (ingredient) {
        ingredientString += ingredient.ingredient + ',';
        ingredients.push(ingredient.ingredient);
      }
    /*console.log('this is request arguments : ');
    console.log(formResult.name);
    console.log(ingredients);
    console.log(formResult.description);
    console.log(formResult.preparationTime);
    console.log(formResult.recipe);*/
    formResult.ingredients = ingredientString;
    formResult.photo = this.imageString;
    this.nutritionalAlalysisRequest = new NutritionAnalysisRequest(formResult.name, ingredients,
      formResult.description, formResult.preparationTime, formResult.recipe);
    this.nutritionAnalysisService.getNutritionAnalysis(this.nutritionalAlalysisRequest).subscribe(value => {
      // console.log(value);
      this.nutritionalAnalysisResponse = new NutritionAnalysisResponse(
        // @ts-ignore
        value.calories,
        // @ts-ignore
        value.totalNutrientsKCal.CHOCDF_KCAL.quantity + ' ' +  value.totalNutrientsKCal.CHOCDF_KCAL.unit,
        // @ts-ignore
        value.totalNutrientsKCal.ENERC_KCAL.quantity + ' ' + value.totalNutrientsKCal.ENERC_KCAL.unit,
        // @ts-ignore
        value.totalNutrientsKCal.FAT_KCAL.quantity + ' ' + value.totalNutrientsKCal.FAT_KCAL.unit,
        // @ts-ignore
        value.totalNutrientsKCal.PROCNT_KCAL.quantity + ' ' + value.totalNutrientsKCal.FAT_KCAL.unit,
        // @ts-ignore
        value.totalWeight,
        // @ts-ignore
        value.dietLabels,
        // @ts-ignore
        value.healthLabels,
        // @ts-ignore
        value.totalNutrients.CA.quantity + ' ' + value.totalNutrients.CA.unit,
        // @ts-ignore
        value.totalNutrients.CHOCDF.quantity + ' ' + value.totalNutrients.CHOCDF.unit,
        // @ts-ignore
        value.totalNutrients.CHOLE.quantity + ' ' + value.totalNutrients.CHOLE.unit,
        // @ts-ignore
        value.totalNutrients.FAT.quantity + ' ' + value.totalNutrients.FAT.unit,
        // @ts-ignore
        value.totalNutrients.K.quantity + ' ' + value.totalNutrients.K.unit,
        // @ts-ignore
        value.totalNutrients.MG.quantity + ' ' + value.totalNutrients.MG.unit,
        // @ts-ignore
        value.totalNutrients.PROCNT.quantity + ' ' + value.totalNutrients.PROCNT.unit,
        // @ts-ignore
        value.totalNutrients.SUGAR.quantity + ' ' + value.totalNutrients.SUGAR.unit,
        // @ts-ignore
        value.totalNutrients.TOCPHA.quantity + ' ' + value.totalNutrients.TOCPHA.unit,
        // @ts-ignore
        value.totalNutrients.VITA_RAE.quantity  + ' ' + value.totalNutrients.VITA_RAE.unit,
        // @ts-ignore
        value.totalNutrients.VITB6A.quantity + ' ' + value.totalNutrients.VITB6A.unit,
        // @ts-ignore
        value.totalNutrients.VITD.quantity + ' ' + value.totalNutrients.VITD.unit,
        // @ts-ignore
        value.totalNutrients.VITK1.quantity + ' ' + value.totalNutrients.VITK1.unit,
        // @ts-ignore
        value.totalNutrients.WATER.quantity + ' ' + value.totalNutrients.WATER.unit
      );
      console.log(this.nutritionalAnalysisResponse);
      let dietLabelsString = '';
      let healthLabelsString = '';
      for ( const label of this.nutritionalAnalysisResponse.dietLabels) {
        if (label) {
          dietLabelsString += label + ',' ;
        }
      }
      for ( const label of this.nutritionalAnalysisResponse.healthLabels) {
        if (label) {
          healthLabelsString += label + ',' ;
        }
      }

      formResult.caloricValue = this.nutritionalAnalysisResponse.calories;
      formResult.carbKcal = this.nutritionalAnalysisResponse.carbKal;
      formResult.energKcal = this.nutritionalAnalysisResponse.energKcal;
      formResult.fatKcal = this.nutritionalAnalysisResponse.fatKcal;
      formResult.protKcal = this.nutritionalAnalysisResponse.protKcal;
      formResult.totalWeight = this.nutritionalAnalysisResponse.totalWeight;
      formResult.dietLabels = dietLabelsString;
      formResult.healthLabels = healthLabelsString;
      formResult.calcium = this.nutritionalAnalysisResponse.calcium;
      formResult.carbs = this.nutritionalAnalysisResponse.carbs;
      formResult.cholesterol = this.nutritionalAnalysisResponse.cholesterol;
      formResult.fat = this.nutritionalAnalysisResponse.fat;
      formResult.potassium = this.nutritionalAnalysisResponse.potassium;
      formResult.magnesium = this.nutritionalAnalysisResponse.magnessium;
      formResult.protein = this.nutritionalAnalysisResponse.protein;
      formResult.sugar = this.nutritionalAnalysisResponse.sugar;
      formResult.vitE = this.nutritionalAnalysisResponse.vitE;
      formResult.vitA = this.nutritionalAnalysisResponse.vitA;
      formResult.vitB6 = this.nutritionalAnalysisResponse.vitB6;
      formResult.vitD = this.nutritionalAnalysisResponse.vitD;
      formResult.vitK = this.nutritionalAnalysisResponse.vitK;
      formResult.water = this.nutritionalAnalysisResponse.water;

      console.log(formResult);

      this.mealService.saveMeal(formResult, this.id).subscribe(value => {
        console.log(value);
        this.rrouter.navigate(['/espace/coach/meals', this.id]);

      });

    },
      error => {
        let formResult = this.myForm.value;
        var ingredientString = '';

        for (let ingredient of this.myForm.value.ingredients)
          if (ingredient) {
            ingredientString += ingredient.ingredient + ',';
          }
        formResult.ingredients = ingredientString;
        formResult.photo = this.imageString;
        console.log(formResult);

        this.mealService.saveMeal(formResult, this.id).subscribe(value => {
          console.log(value);
          this.rrouter.navigate(['/espace/coach/meals', this.id]);

        });
      }
    );
  }


}
