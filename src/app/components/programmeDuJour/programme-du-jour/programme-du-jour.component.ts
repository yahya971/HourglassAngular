import { Component, OnInit } from '@angular/core';
import {Program} from '../../../Models/program.model';
import {ProgramService} from '../../../services/program.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../../auth/token-storage.service';

@Component({
  selector: 'app-programme-du-jour',
  templateUrl: './programme-du-jour.component.html',
  styleUrls: ['./programme-du-jour.component.css']
})
export class ProgrammeDuJourComponent implements OnInit {
  program: Program;
  id: any;
  hasProgram = false;
  constructor(private programService: ProgramService, private router: ActivatedRoute,
              private tokenStorageService: TokenStorageService) {
     router.params.subscribe(params => {this.id = params.id; } );
    //this.id = +this.tokenStorageService.getUserId();
    console.log(this.id);
  }

  ngOnInit() {
    this.programService.getProgramById(this.id).subscribe(value => {
      this.program = value;
      console.log(this.program);
    });
    this.programService.getProgramByClientId(this.id).subscribe(value => {
      console.log(value);
      if (value !== undefined) {
        this.hasProgram = true;
      }
    });
  }

}
