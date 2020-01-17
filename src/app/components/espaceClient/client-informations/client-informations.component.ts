import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProgramService} from '../../../services/program.service';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../Models/client.model';
import {Program} from '../../../Models/program.model';

@Component({
  selector: 'app-client-informations',
  templateUrl: './client-informations.component.html',
  styleUrls: ['./client-informations.component.css']
})
export class ClientInformationsComponent implements OnInit {
  id: any;
  client: Client;
  program: Program;
  olds: Array<Program>;
  constructor(private clientService: ClientService, private aroute: ActivatedRoute, private wlprogramService: ProgramService) {

  }

  ngOnInit() {
    this.aroute.params.subscribe(params => {
      this.id = params.id;
    });
    this.clientService.getClientById(this.id).subscribe(value => {
      this.client = value;
    });
    this.wlprogramService.getProgramByClientId(this.id).subscribe(
      value1 => {
        this.program = value1;
      });
    this.wlprogramService.getOldProgramsByClientId(this.id).subscribe(value2 => {
      this.olds = value2;
    });
  }

}
