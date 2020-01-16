import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { WorkoutService } from '../../../services/workout.service';
import { Workout } from '../../../Models/workout.model';

@Component({
  selector: 'app-coach-update-workout',
  templateUrl: './coach-update-workout.component.html',
  styleUrls: ['./coach-update-workout.component.css']
})
export class CoachUpdateWorkoutComponent implements OnInit {
  id: string;
  myForm: FormGroup;
  imageString: any;
  workoutId: string;
  workout: Workout;
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private workoutService: WorkoutService, private rrouter: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.workoutId=params.workoutId
    });
    localStorage.setItem('coachId', this.id.toString());
    this.workoutService.getWorkoutByIdAndCoachId(this.workoutId, this.id).subscribe(value => {
      this.workout = value;
      this.myForm = this.fb.group({
        name: [this.workout.name],
        startingHour: [this.workout.startingHour],
        burnedCalories: [this.workout.burnedCalories],
        description: [this.workout.description],
        duration: [this.workout.duration],
        equipements: this.fb.array([]),
        photo: [''],
        directions: [this.workout.description],


      });
      for (let equipment of this.workout.equipment.split(','))
        if (equipment)
      this.addEquipement(equipment);
      console.log(this.workout);
      console.log(this.myForm.value);
    })
    


  }

  get equipementForms() {
    return this.myForm.get('equipements') as FormArray;
  }

  addEquipement(equipment) {
    if (!equipment)
      equipment = '';
    const equipement = this.fb.group({
      equipement: [equipment]
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
    if (this.imageString)
      formResult.photo = this.imageString;
    else
      formResult.photo = this.workout.photo;
    console.log(formResult);
    this.workoutService.updateWorkout(formResult, this.workoutId).subscribe(value => {
      console.log(value);
      this.rrouter.navigate(['/espace/coach/workouts', this.id]);

    });
  }

}
