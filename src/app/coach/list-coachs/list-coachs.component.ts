import { Component, OnInit } from '@angular/core';
import {Coach} from '../../Models/coach.Model';
import {CoachService} from '../../services/coach.service';

@Component({
  selector: 'app-list-coachs',
  templateUrl: './list-coachs.component.html',
  styleUrls: ['./list-coachs.component.css']
})
export class ListCoachsComponent implements OnInit {
  coaches: Array<Coach>;
  constructor(private coachService: CoachService) { }

  ngOnInit() {
    this.coachService.getAllCoaches().subscribe(value => {
      this.coaches = value;
 });
  }

}
