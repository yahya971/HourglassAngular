import {Component, OnInit} from '@angular/core';
import {Coach} from '../../Models/coach.Model';
import {CoachService} from '../../services/coach.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  coach: Coach;

  constructor(private coachService: CoachService) {
  }

  ngOnInit() {
    this.coachService.getCoachById(1).subscribe(value => {
      this.coach = value;
    });
  }
}
