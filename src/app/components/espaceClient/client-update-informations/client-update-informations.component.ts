import { Component, OnInit } from '@angular/core';
import {Client} from "../../../Models/client.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../../services/client.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-client-update-informations',
  templateUrl: './client-update-informations.component.html',
  styleUrls: ['./client-update-informations.component.css']
})
export class ClientUpdateInformationsComponent implements OnInit {
  id: any;
  client: Client;

  constructor(private clientService: ClientService, private aroute: ActivatedRoute, private router: Router) {
    aroute.params.subscribe(params => {
      this.id = params.id;
    });
    this.clientService.getClientById(this.id).subscribe(value => {
      this.client = value;
      // console.log(this.client);
    });
  }

  ngOnInit() {
  }

  onSubmit(formulaire: NgForm) {
    // console.log(formulaire.value);
    if (formulaire.value.name !== '') {
      this.client.name = formulaire.value.name;
    }
    if (formulaire.value.lastname !== '') {
      this.client.lastname = formulaire.value.lastname;
    }
    if (formulaire.value.age !== '') {
      this.client.age = formulaire.value.age;
    }
    if (formulaire.value.email !== '') {
      this.client.email = formulaire.value.email;
    }
    if (formulaire.value.weight !== '') {
      this.client.currentWeight = formulaire.value.weight;
    }
    if (formulaire.value.height !== '') {
      this.client.height = formulaire.value.height;
    }
    if (formulaire.value.desiredWeight !== '') {
      this.client.desiredWeight = formulaire.value.desiredWeight;
    }
    if (formulaire.value.username !== '') {
      this.client.username = formulaire.value.username;
    }
    if (formulaire.value.password !== '') {
      this.client.password = formulaire.value.password;
    }
    if (formulaire.value.frame !== '') {
      this.client.frame = formulaire.value.frame;
    }
    if (formulaire.value.silouhette !== '') {
      this.client.silhouette = formulaire.value.silouhette;
    }
    if (formulaire.value.fatDistribution !== '') {
      this.client.fatDistribution = formulaire.value.fatDistribution;
    }
    // console.log(this.client);
    this.clientService.updateClient(this.client, this.id).subscribe(value => {
      console.log(value);
    }, error => {
      console.log(error);
    });
    this.router.navigate(['espace/client/informations/', this.id]);
  }
}
