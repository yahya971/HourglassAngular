export class Program {
  id: number;
  backgroundImage: any;
  description: string;
  duration: number;
  objectifs: string;
  rating: number;
  startingdate: Date;
  audianceid: number;
  coachid: number;
  clientid: number;
  name: string;

  constructor(id: number, photo: any, description: string, duration: number, objectifs: string,
              rating: number, startingdate: any, audianceid: number, coachid: number, clientid: number, name: string) {
    this.id = id;
    this.backgroundImage = photo;
    this.description = description;
    this.duration = duration;
    this.objectifs = objectifs;
    this.rating = rating;
    this.startingdate = startingdate;
    this.audianceid = audianceid;
    this.coachid = coachid;
    this.clientid = clientid;
    this.name = name;
  }
}
