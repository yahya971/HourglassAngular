import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProgramService} from '../../services/program.service';
import {Program} from '../../Models/program.model';

@Component({
  selector: 'app-espace-coach-programs',
  templateUrl: './espace-coach-programs.component.html',
  styleUrls: ['./espace-coach-programs.component.css']
})
export class EspaceCoachProgramsComponent implements OnInit {

  id: any;
  programs: Array<Program>;
  constructor(private router: ActivatedRoute, private wlprogramService: ProgramService ) {
    this.router.params.subscribe(value => {
      this.id = value.id;
    });
    console.log(this.id);
  }

  ngOnInit() {
    this.wlprogramService.getProgramByCoachId(this.id).subscribe(
      value => {
        this.programs = value;
      }
      );
    console.log(this.programs);
  }

}
