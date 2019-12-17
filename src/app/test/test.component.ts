import { Component, OnInit } from '@angular/core';
import { CoachService } from '../services/coach.service';
import { Coach } from '../Models/coach.Model';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  coaches: Array<Coach>;
  coach: Coach;
  constructor(private coachService: CoachService) { }

  ngOnInit() {
   /* this.coachService.getAllCoaches().subscribe(value => {
    this.coaches = value;
    console.log(this.coaches)});
    this.coachService.getCoachById(1).subscribe(value => {
      this.coach = value;
      console.log(this.coach);
    });*/
  }
  onSubmit(formulaire: NgForm) {
    this.coachService.saveCoach(formulaire.value);
    }
}
