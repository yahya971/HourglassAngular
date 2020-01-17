import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Program} from '../../../Models/program.model';
import {ProgramService} from '../../../services/program.service';
import { TokenStorageService } from '../../../auth/token-storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  programId: any;
  program: Program;
  userId: number=1;

  constructor(private aroute: ActivatedRoute, private programService: ProgramService, private tokenService: TokenStorageService) {
    aroute.params.subscribe((param: any) => (this.programId = param.id));
    console.log(this.programId);
  }

  ngOnInit() {
    this.programService.getProgramById(this.programId).subscribe(value => {
      this.program = value;
    });

    this.userId = +this.tokenService.getUserId();
  }


  affecterProgramme() {
    this.programService.affecterProgramme(this.userId, this.programId).subscribe(value => {
      console.log(value);
    })
  }

}
