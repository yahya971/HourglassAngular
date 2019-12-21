import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../Models/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  getAllClients() {
    return this.http.get<Array<Client>>('http://localhost:8080/client');
  }

  getCoachById(id) {
    return this.http.get<Client>('http://localhost:8080/client/' + id);
  }

  saveCoach(client: Client) {
    this.http.post<Client>('http://localhost:8080/client/addClient', client).subscribe(res => {

    });
  }
}
