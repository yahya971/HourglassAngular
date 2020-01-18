import { Component, OnInit } from '@angular/core';
import { Meal } from '../../../Models/meal.model';
import { MealService } from '../../../services/meal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from '../../../services/coach.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ImageConverterService } from '../../../services/image-converter.service';

@Component({
  selector: 'app-coach-update-meal',
  templateUrl: './coach-update-meal.component.html',
  styleUrls: ['./coach-update-meal.component.css']
})
export class CoachUpdateMealComponent implements OnInit {
  meal: Meal;
  mealId: string;
  coachId: string;
  imageString: any;
  ingredients: string[];
  myForm: FormGroup;

  constructor(private mealService: MealService, private route: ActivatedRoute, private coachService: CoachService, private fb: FormBuilder, private router: Router, private imgConverter: ImageConverterService) {
    this.route.params.subscribe(params => {
      this.coachId = params['id'];
      this.mealId = params['mealId'];

      localStorage.setItem('coachId', this.coachId);

    });
    this.mealService.getMealByIdAndCoachId(this.mealId, this.coachId).subscribe(value => {
    this.meal = value; console.log(this.meal);
      this.myForm = this.fb.group({
        name: [this.meal.name],
        type: [this.meal.type],
        time: [this.meal.time],
        caloricValue: [this.meal.caloricValue],
        description: [this.meal.description],
        preparationTime: [this.meal.preparationTime],
        ingredients: this.fb.array([]),
        photo: [],
        recipe: [this.meal.recipe],


      });
      for (let ingredient of this.meal.ingredients.split(','))
        if(ingredient)
        this.addIngredient(ingredient);
    });
    

  }

  get ingredientForms() {
    return this.myForm.get('ingredients') as FormArray;
  }

  addIngredient(a) {
    if (!a)
      a = "";
    const ingredient = this.fb.group({
      ingredient: [a]
    });

    this.ingredientForms.push(ingredient);
    
  }

  deleteIngredient(i) {
    this.ingredientForms.removeAt(i);
  }

  updateFormMeal() {
    let formResult = this.myForm.value;
    var ingredientString = "";
    
    for (let ingredient of this.myForm.value.ingredients)
      if(ingredient)
      ingredientString += ingredient.ingredient + ',';
    formResult.ingredients = ingredientString;
    if (this.imageString!=='')
    formResult.photo = this.imageString ;
    console.log(formResult);
    
    this.mealService.updateMeal(formResult, this.mealId).subscribe(value => { console.log(value); this.router.navigate(['espace/coach/meal', this.coachId, this.mealId]); })
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


  

  ngOnInit() {
  }

}
