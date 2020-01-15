import {Program} from './program.model';

export class Follow {
  id: number;
  day: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  weight: number;
  comment: string;
  consulted: boolean;
  weightLossProgram: Program;
  constructor(day: string, question1: string, question2: string, question3: string, question4: string,
              comment: string, consulted: boolean, weightLossProgram: Program, weight:number) {
    this.day = day;
    this.question1 = question1;
    this.question2 = question2;
    this.question3 = question3;
    this.question4 = question4;
    this.comment = comment;
    this.consulted = consulted;
    this.weightLossProgram = weightLossProgram;
    this.weight = weight;
  }
}
