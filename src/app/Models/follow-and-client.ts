import {Client} from './client.model';
import {Follow} from './follow.model';

export class FollowAndClient {
  client: Client;
  follows: Follow[];


  constructor(client: Client= null, follows: Follow[]= []) {
    this.client = client;
    this.follows = follows;
  }
}
