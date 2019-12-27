import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-coach-create-meal',
  templateUrl: './coach-create-meal.component.html',
  styleUrls: ['./coach-create-meal.component.css']
})
export class CoachCreateMealComponent implements OnInit {
  id: string;
  myForm: FormGroup;
  constructor(private router: ActivatedRoute, private fb: FormBuilder) { }

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
      ingredient:[]
    })

    this.ingredientForms.push(ingredient);
    console.log(this.myForm.value);
  }

  deleteIngredient(i) {
    this.ingredientForms.removeAt(i)
  }

}
