import { Component, OnInit } from '@angular/core';
import {Program} from '../../../Models/program.model';
import {ProgramService} from '../../../services/program.service';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-listprograms',
  templateUrl: './listprograms.component.html',
  styleUrls: ['./listprograms.component.css']
})
export class ListprogramsComponent implements OnInit {
programs: Array<Program>;
  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.programService.getAllPrograms().pipe(map(value=>value.filter(x=>x.client.id==999))).subscribe(value => {
      this.programs = value;
    });
  }

}
