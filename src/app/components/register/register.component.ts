import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../../auth/signup-info';
import {AuthService} from '../../auth/auth.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignUpCoachInfo} from '../../auth/signupcoach-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  appraisalFormGroup: FormGroup;
  isSubmitted = false;
  signUpCoachInfo: SignUpCoachInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  photo: any;

  /** Returns a FormArray with the name 'formArray' */
  get appraisalForm(): AbstractControl | null { return this.appraisalFormGroup.get('appraisalForm'); }

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

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

  onSubmit() {
    console.log(this.appraisalForm);

    /*this.signUpInfo = new SignUpInfo(
      this.registrationForm.username,
      this.registrationForm.email,
      this.registrationForm.name,
      this.registrationForm.lastname,
      this.registrationForm.password
    );*/
    this.signUpCoachInfo = new SignUpCoachInfo(
      this.appraisalForm.get([0]).get('username').value,
      this.appraisalForm.get([0]).get('email').value,
      this.appraisalForm.get([0]).get('firstname').value,
      this.appraisalForm.get([0]).get('lastname').value,
      this.appraisalForm.get([0]).get('password').value,
      this.appraisalForm.get([1]).get('resume').value,
      5,
      5,
      5,
      5,
      this.appraisalForm.get([1]).get('age').value,
      this.photo,
      this.appraisalForm.get([1]).get('experience').value,
      this.appraisalForm.get([1]).get('speciality').value,
      this.appraisalForm.get([1]).get('phone').value
    );

    this.authService.signUpCoach(this.signUpCoachInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.isSubmitted = true;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  check() {
    console.log(this.appraisalForm.get([0]).get('username').value);
  }

  convertImage(imageUrl) {
    var file: any = imageUrl.target.files[0];

    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.photo = myReader.result;

    }
    myReader.readAsDataURL(file);
  }

  onChangeFile($event) {
    this.convertImage($event);
  }

}
