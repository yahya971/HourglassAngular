import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MealService } from '../../../services/meal.service';

@Component({
  selector: 'app-coach-create-meal',
  templateUrl: './coach-create-meal.component.html',
  styleUrls: ['./coach-create-meal.component.css']
})
export class CoachCreateMealComponent implements OnInit {
  id: string;
  myForm: FormGroup;
  imageString: any;
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private mealService: MealService,private rrouter:Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => { this.id = params.id; });
    localStorage.setItem('coachId', this.id.toString());

    this.myForm = this.fb.group({
      name: [],
      type: [],
      time: [],
      caloricValue: [1000],
      description: [],
      preparationTime: [],
      ingredients: this.fb.array([]),
      photo: [],
      recipe: [],


    });
    this.addIngredient();
    console.log(this.myForm.value);

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
    let formResult = this.myForm.value;
    var ingredientString = "";

    for (let ingredient of this.myForm.value.ingredients)
      if (ingredient)
        ingredientString += ingredient.ingredient + ',';
    formResult.ingredients = ingredientString;
    formResult.photo = this.imageString;
    console.log(formResult);
    this.mealService.saveMeal(formResult, this.id).subscribe(value => {
      console.log(value);
      this.rrouter.navigate(['/espace/coach/meals', this.id]);

    })
  }


}
