import { Audiance } from './audiance.model';
import { NutritionalProgram } from './nutritional-program.model';
import { SportsProgram } from './sports-program.model';

export class WeightLossProgramPogo {
  
  backgroundImage: any;
  description: string;
  duration: number;
  objectifs: string;
  rating: number;
  startingdate: Date;
  name: string;
  audiance: Audiance;
  nutritionalPrograms: NutritionalProgram[];
  sportsPrograms: SportsProgram[];

  constructor( photo: any, description: string, duration: number, objectifs: string,
    rating: number, startingdate: any, name: string,nut,sp,aud) {
    this.backgroundImage = photo;
    this.description = description;
    this.duration = duration;
    this.objectifs = objectifs;
    this.rating = rating;
    this.startingdate = startingdate;
    this.name = name;
    this.nutritionalPrograms = nut;
    this.sportsPrograms = sp;
    this.audiance = aud;
  }
}
