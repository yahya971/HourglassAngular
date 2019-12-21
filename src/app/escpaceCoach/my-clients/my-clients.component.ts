import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../Models/client.model';
import {ActivatedRoute} from '@angular/router';
import {CoachService} from '../../services/coach.service';
import {Coach} from '../../Models/coach.Model';

@Component({
  selector: 'app-my-clients',
  templateUrl: './my-clients.component.html',
  styleUrls: ['./my-clients.component.css']
})
export class MyClientsComponent implements OnInit {
  coach: Coach;
  clients: Array<Client>;
  id: any;
  constructor(private clientService: ClientService, private coachService: CoachService, private router: ActivatedRoute) {
    router.params.subscribe(params => {this.id = params.id; });
  }

  ngOnInit() {
    this.coachService.getCoachById(this.id).subscribe(value => {
      this.coach = value;
    });
    this.clientService.getClientByCoachId(this.id).subscribe(value => {
      this.clients = value;
    });
  }

}
