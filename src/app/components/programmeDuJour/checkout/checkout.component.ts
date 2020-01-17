import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Program} from '../../../Models/program.model';
import {ProgramService} from '../../../services/program.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  id: any;
  program: Program;

  constructor(private aroute: ActivatedRoute, private programService: ProgramService) {
    aroute.params.subscribe((param: any) => (this.id = param.id));
    console.log(this.id);
  }

  ngOnInit() {
    this.programService.getProgramById(this.id).subscribe(value => {
      this.program = value;
    });
  }

}
