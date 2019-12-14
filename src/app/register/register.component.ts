import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../auth/signup-info';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signUpInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);

    this.signUpInfo = new SignUpInfo(
      this.form.username,
      this.form.email,
      this.form.name,
      this.form.lastname,
      this.form.password
    );

    this.authService.signUp(this.signUpInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
