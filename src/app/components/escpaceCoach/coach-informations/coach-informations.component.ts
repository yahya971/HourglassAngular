import { Component, OnInit } from '@angular/core';
import {CoachService} from '../../../services/coach.service';
import {Coach} from '../../../Models/coach.Model';
import {ActivatedRoute} from '@angular/router';
import {Program} from "../../../Models/program.model";
import {ProgramService} from "../../../services/program.service";

@Component({
  selector: 'app-coach-informations',
  templateUrl: './coach-informations.component.html',
  styleUrls: ['./coach-informations.component.css']
})
export class CoachInformationsComponent implements OnInit {
  id: string;
  coach: Coach;
  programs: Array<Program>;
  constructor(private coachService: CoachService, private aroute: ActivatedRoute, private wlprogramService: ProgramService) {
    aroute.params.subscribe(params => {this.id = params.id; });
  }

  ngOnInit() {
    this.coachService.getCoachById(this.id).subscribe(value => {
      this.coach = value;
      this.wlprogramService.getProgramByCoachId(this.id).subscribe(
        value1 => {
          this.programs = value1;
        });
    });
  }

}
