import { Component, OnInit } from '@angular/core';
import {Coach} from '../../Models/coach.Model';
import {CoachService} from '../../services/coach.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
coach: Coach;
id: any;
  constructor(private coachService: CoachService, private router: ActivatedRoute) {
    router.params.subscribe(params => {this.id = params.id; });
  }

  ngOnInit() {
    this.coachService.getCoachById(this.id).subscribe(value => {
      this.coach = value;
    });
  }

}
