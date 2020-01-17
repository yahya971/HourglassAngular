import { Component, OnInit } from '@angular/core';
import {Program} from '../../../Models/program.model';
import {ProgramService} from '../../../services/program.service';

@Component({
  selector: 'app-listprograms',
  templateUrl: './listprograms.component.html',
  styleUrls: ['./listprograms.component.css']
})
export class ListprogramsComponent implements OnInit {
programs: Array<Program>;
  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.programService.getAllPrograms().subscribe(value => {
      this.programs = value;
    });
  }

}
