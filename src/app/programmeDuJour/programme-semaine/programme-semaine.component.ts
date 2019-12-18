import { Component, OnInit } from '@angular/core';
import {ProgramService} from '../../services/program.service';
import {Program} from '../../Models/program.model';


@Component({
  selector: 'app-programme-semaine',
  templateUrl: './programme-semaine.component.html',
  styleUrls: ['./programme-semaine.component.css']
})
export class ProgrammeSemaineComponent implements OnInit {

  program: Program;
  constructor(private programservice: ProgramService) { }
  ngOnInit() {
    this.programservice.getProgramById(1).subscribe(value => {
      this.program = value ;
    });
  }

}
