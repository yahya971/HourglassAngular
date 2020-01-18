import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignUpClientInfo} from '../../auth/signupclient-info';
import {AuthService} from '../../auth/auth.service';
import {SignUpCoachInfo} from '../../auth/signupcoach-info';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  appraisalFormGroup: FormGroup;
  isSubmitted = false;
  signUpClientInfo: SignUpClientInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  photo: any;

  /** Returns a FormArray with the name 'formArray' */
  get appraisalForm(): AbstractControl | null { return this.appraisalFormGroup.get('appraisalForm'); }

  constructor(private authService: AuthService, private formBuilder: FormBuilder,
              private route: Router) { }

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
          currentWeight: ['', Validators.required],
          desiredWeight: ['', Validators.required],
          height: ['', Validators.required],
          photo: [''],
          sex: [''],
        }),
      ])
    });
  }

  onSubmit() {
    console.log(this.appraisalForm);
    this.signUpClientInfo = new SignUpClientInfo(
      this.appraisalForm.get([0]).get('username').value,
      this.appraisalForm.get([0]).get('email').value,
      this.appraisalForm.get([0]).get('firstname').value,
      this.appraisalForm.get([0]).get('lastname').value,
      this.appraisalForm.get([0]).get('password').value,
      this.appraisalForm.get([1]).get('age').value,
      this.appraisalForm.get([1]).get('currentWeight').value,
      this.appraisalForm.get([1]).get('desiredWeight').value,
      'None',
      'None',
      this.appraisalForm.get([1]).get('height').value,
      this.photo,
      this.appraisalForm.get([1]).get('sex').value,
      'None'
    );

    this.authService.signUpClient(this.signUpClientInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.isSubmitted = true;
        this.route.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
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
