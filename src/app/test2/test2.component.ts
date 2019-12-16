import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  appraisalFormGroup: FormGroup;
  isSubmitted = false;

  /** Returns a FormArray with the name 'formArray' */
  get appraisalForm(): AbstractControl | null { return this.appraisalFormGroup.get('appraisalForm'); }


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.appraisalFormGroup = this.formBuilder.group({
      appraisalForm: this.formBuilder.array([
        this.formBuilder.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
        }),
        this.formBuilder.group({
          age: ['', Validators.required],
          experience: ['', Validators.required],
          phone: [''],
          photo: [''],
          resume: [''],
          speciality: ['', Validators.required],
        }),
      ])
    });
  }
  submitted() {
    this.isSubmitted = true;
  }


}
