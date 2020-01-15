import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-client-survey',
  templateUrl: './client-survey.component.html',
  styleUrls: ['./client-survey.component.css']
})
export class ClientSurveyComponent implements OnInit {

  surveyForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.surveyForm = this.formBuilder.group({
      question1: ['noAnswer'],
      question2: ['noAnswer'],
      question3: ['noAnswer'],
      question4: ['noAnswer'],
      comment: ['']
    });
  }

  submitForm() {
    console.log(this.surveyForm);
  }

}
