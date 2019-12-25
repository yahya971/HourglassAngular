import {Component, Input, OnInit} from '@angular/core';
import {Program} from '../../../Models/program.model';
import {ProgramService} from '../../../services/program.service';
import {Coach} from '../../../Models/coach.Model';

@Component({
  selector: 'app-related-courses',
  templateUrl: './related-courses.component.html',
  styleUrls: ['./related-courses.component.css']
})
export class RelatedCoursesComponent implements OnInit {
  programs: Array<Program>;
  @Input()id: number;
  constructor(private programservice: ProgramService) {
  }
  ngOnInit() {
    this.programservice.getProgramByCoachId(this.id).subscribe(value => {
      this.programs = value;
      console.log(this.programs);
    });

  }
}
