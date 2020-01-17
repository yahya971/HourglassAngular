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
  constructor(private clientService: ClientService, aroute: ActivatedRoute, private wlprogramService: ProgramService) {

  }

  ngOnInit() {
    this.clientService.getClientById(this.id).subscribe(value => {
      this.client = value;
    });
    this.wlprogramService.getProgramByClientId(this.id).subscribe(
      value1 => {
        this.program = value1;
      });
  }

}
