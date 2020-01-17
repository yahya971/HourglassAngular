import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ClientService} from '../../../services/client.service';
import {ProgramService} from '../../../services/program.service';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../../../Models/client.model';
import {Program} from '../../../Models/program.model';
import {Follow} from '../../../Models/follow.model';
import {FollowService} from '../../../services/follow.service';

@Component({
  selector: 'app-client-survey',
  templateUrl: './client-survey.component.html',
  styleUrls: ['./client-survey.component.css']
})
export class ClientSurveyComponent implements OnInit {

  surveyForm: FormGroup;
  cliendId;
  client: Client;
  program: Program;
  follow: Follow;
  hasSentSurvey = false;
  constructor(private formBuilder: FormBuilder, private clientService: ClientService,
              private programService: ProgramService, private route: ActivatedRoute,
              private followService: FollowService) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.cliendId = params.id;
    });

    this.programService.getProgramByClientId(this.cliendId).subscribe(value => {
      this.program = value;
      this.checkSurvey();
    });
    this.clientService.getClientById(this.cliendId).subscribe(value => {
      this.client = value ;
      console.log(this.client);
      this.surveyForm.patchValue({weight: this.client.currentWeight}) ;
    });
    this.surveyForm = this.formBuilder.group({
      question1: ['noAnswer'],
      question2: ['noAnswer'],
      question3: ['noAnswer'],
      question4: ['noAnswer'],
      weight: [],
      comment: ['']
    });
  }

  checkSurvey() {
    this.followService.getFollowByDay(this.program.id, this.getCurrentDay()).subscribe(
      value => {
        if (value) {
          this.hasSentSurvey = true;
          console.log(this.hasSentSurvey);
        }
      },
        error => {
          this.hasSentSurvey = false;
          console.log(this.hasSentSurvey);
      });
  }

  getCurrentDay(): string {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    let ddString = dd.toString();
    let mmString = mm.toString();

    const yyyy = today.getFullYear();
    if (dd < 10) {
      ddString = '0' + dd;
    }
    if (mm < 10) {
      mmString = '0' + mm;
    }
    return (yyyy + '-' + mmString + '-' + ddString);
  }

  submitForm() {
    console.log(this.surveyForm);
    const myForm = this.surveyForm.value;
    this.follow = new Follow(this.getCurrentDay(), myForm.question1, myForm.question2, myForm.question3,
      myForm.question4, myForm.comment, false, this.program, myForm.weight);
    console.log(this.follow);
    if (myForm.weight !== this.client.currentWeight) {
      this.client.currentWeight = myForm.weight;
      this.clientService.updateClient(this.client, this.cliendId).subscribe(value => {
        console.log(value);
      });
    }
    this.followService.saveFollow(this.follow).subscribe(value => {
      console.log(value);
      this.hasSentSurvey = true;
    });
  }

}
