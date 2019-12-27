import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-coach-create-workout',
  templateUrl: './coach-create-workout.component.html',
  styleUrls: ['./coach-create-workout.component.css']
})
export class CoachCreateWorkoutComponent implements OnInit {
  id: string;
  myForm: FormGroup;

  constructor(private router: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id;
    });
    localStorage.setItem('coachId', this.id.toString());

    this.myForm = this.fb.group({
      name: [],
      type: [],
      startingHour: [],
      burnedCalories: [1000],
      description: [],
      duration: [],
      equipements: this.fb.array([]),
      photo: [],
      directions: [],


    });
    this.addEquipement();
    console.log(this.myForm.value);
    this.myForm.valueChanges.subscribe(console.log);
  }
  get equipementForms() {
    return this.myForm.get('equipements') as FormArray;
  }

  addEquipement() {

    const equipement = this.fb.group({
      equipement: []
    });

    this.equipementForms.push(equipement);
    console.log(this.equipementForms.value);
  }

  deleteEquipement(i) {
    this.equipementForms.removeAt(i);
  }
}
