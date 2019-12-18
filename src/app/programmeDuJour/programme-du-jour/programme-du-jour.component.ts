import { Component, OnInit } from '@angular/core';
import {Program} from '../../Models/program.model';
import {ProgramService} from '../../services/program.service';

@Component({
  selector: 'app-programme-du-jour',
  templateUrl: './programme-du-jour.component.html',
  styleUrls: ['./programme-du-jour.component.css']
})
export class ProgrammeDuJourComponent implements OnInit {
  program: Program;
  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.programService.getProgramById(1).subscribe(value => {
      this.program = value;
    });
  }

}
