import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {WorkoutService} from '../../../services/workout.service';

@Component({
  selector: 'app-coach-create-workout',
  templateUrl: './coach-create-workout.component.html',
  styleUrls: ['./coach-create-workout.component.css']
})
export class CoachCreateWorkoutComponent implements OnInit {
  id: string;
  myForm: FormGroup;
  imageString: any;

  constructor(private router: ActivatedRoute, private fb: FormBuilder, private workoutService: WorkoutService, private rrouter: Router) {
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

  convertImage(imageUrl) {
    const file: any = imageUrl.target.files[0];

    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.imageString = myReader.result;
    };
    myReader.readAsDataURL(file);
  }

  onChangeFile($event) {
    this.convertImage($event);
  }

  submitFormWorkout() {
    const formResult = this.myForm.value;
    let equipementString = '';

    for (const equipement of this.myForm.value.equipements) {
      if (equipement) {
        equipementString += equipement.equipement + ',';
      }
    }
    formResult.equipements = equipementString;
    formResult.photo = this.imageString;
    console.log(formResult);
    this.workoutService.saveWorkout(formResult, this.id).subscribe(value => {
      console.log(value);
      this.rrouter.navigate(['/espace/coach/workouts', this.id]);

    });
  }
}
