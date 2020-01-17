import { Component, OnInit } from '@angular/core';
import $ from '../../../assets/js/jquery.min.js';
import {Program} from '../../Models/program.model';
import {ProgramService} from '../../services/program.service';
import {CoachService} from '../../services/coach.service';
import {Coach} from '../../Models/coach.Model';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  programs: Array<Program>;
  coaches: Array<Coach>;
  constructor(private programService: ProgramService, private coachService: CoachService) { }

  ngOnInit() {
    this.programService.getAllPrograms().subscribe(value => {
      this.programs = value;
    });
    this.coachService.getAllCoaches().subscribe( value => {
      this.coaches = value;
    });
  }
}
