import { Component, OnInit } from '@angular/core';
import {Program} from "../../Models/program.model";
import {ProgramService} from "../../services/program.service";

@Component({
  selector: 'app-related-courses',
  templateUrl: './related-courses.component.html',
  styleUrls: ['./related-courses.component.css']
})
export class RelatedCoursesComponent implements OnInit {
  programs: Array<Program>;

  constructor(private programservice: ProgramService) {
  }

  ngOnInit() {
    this.programservice.getProgramByCoachId(1).subscribe(value => {
      this.programs = value;
      console.log(this.programs)
    });

  }
}
