import {Client} from './client.model';

export class Program {
  id: number;
  backgroundImage: any;
  description: string;
  duration: number;
  objectifs: string;
  rating: number;
  endDate: Date;
  audianceid: number;
  coachid: number;
  client: Client;
  name: string;
  price: number;

  constructor(id: number, photo: any, description: string, duration: number, objectifs: string,
              rating: number, endDate: any, audianceid: number, coachid: number, client: Client, name: string, price: number) {
    this.id = id;
    this.backgroundImage = photo;
    this.description = description;
    this.duration = duration;
    this.objectifs = objectifs;
    this.rating = rating;
    this.endDate = endDate;
    this.audianceid = audianceid;
    this.coachid = coachid;
    this.client = client;
    this.name = name;
    this.price = price;
  }



}
