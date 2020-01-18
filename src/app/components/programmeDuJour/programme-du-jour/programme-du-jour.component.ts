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
  isClient = false;
  isCoach = false;
  program: Program;
  id: any;
  userId: number;
  hasProgram = false;
  constructor(private programService: ProgramService, private router: ActivatedRoute,
              private tokenStorageService: TokenStorageService) {
     router.params.subscribe(params => {this.id = params.id; } );
    this.userId = +this.tokenStorageService.getUserId();
    console.log(this.id);
    if (this.tokenStorageService.getAuthorities()[0] === 'ROLE_USER') {
      this.isClient = true;
    } else if ( this.tokenStorageService.getAuthorities()[0] === 'ROLE_COACH') {
      this.isCoach = true;
    }
  }

  ngOnInit() {
    this.programService.getProgramById(this.id).subscribe(value => {
      this.program = value;
      console.log(this.program);
    });
    if (this.tokenStorageService.getAuthorities()[0] === 'ROLE_USER') {
      this.programService.getProgramByClientId(this.userId).subscribe(value => {
        console.log('okok')
        console.log(value);
        if (value !== null) {
          this.hasProgram = true;
        }
      });
    }
  }

}
