import { Component, OnInit } from '@angular/core';
import { CoachService } from '../services/coach.service';
import { Coach } from '../Models/coach.Model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  coaches: Array<Coach>;
  coach: Coach;
  constructor(private coachService:CoachService) { }

  ngOnInit() {
    this.coachService.getAllCoaches().subscribe(value => {
    this.coaches = value;
    console.log(this.coaches)});
    this.coachService.getCoachById(3).subscribe(value => {
      this.coach = value;
      console.log(this.coach);
    });
  }

}
