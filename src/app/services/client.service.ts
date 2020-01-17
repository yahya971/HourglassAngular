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

  getClientById(id) {
    return this.http.get<Client>('http://localhost:8080/client/' + id);
  }

  getClientByUsername(username) {
    return this.http.get<Client>('http://localhost:8080/client/byUsername/' + username);
  }

  getClientByCoachId(id) {
    return this.http.get<Array<Client>>('http://localhost:8080/coach/' + id + '/clients');
  }
  saveClient(client: Client) {
    this.http.post<Client>('http://localhost:8080/client/addClient', client).subscribe(res => {

    });
  }

  updateClient(client: Client, id) {
    return this.http.put<Client>('http://localhost:8080/client/updateclient/' + id, client);
  }
}
