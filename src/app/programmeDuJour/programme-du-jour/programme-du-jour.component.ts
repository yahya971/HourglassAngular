import { Component, OnInit } from '@angular/core';
import {Program} from '../../Models/program.model';
import {ProgramService} from '../../services/program.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-programme-du-jour',
  templateUrl: './programme-du-jour.component.html',
  styleUrls: ['./programme-du-jour.component.css']
})
export class ProgrammeDuJourComponent implements OnInit {
  program: Program;
  id: any;
  constructor(private programService: ProgramService, private router: ActivatedRoute) {
    router.params.subscribe(params => {this.id = params.id; } );
  }

  ngOnInit() {
    this.programService.getProgramById(this.id).subscribe(value => {
      this.program = value;
      console.log(this.program);
    });
  }

}
