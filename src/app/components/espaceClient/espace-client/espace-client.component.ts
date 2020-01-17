import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../auth/token-storage.service';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../Models/client.model';

@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {
  id: number;
  client: Client;
  constructor(private tokenService: TokenStorageService,private clientService:ClientService) {
    this.id = +this.tokenService.getUserId();

  }

  ngOnInit() {
    this.clientService.getClientById(this.id).subscribe(value => this.client = value);

  }

}
