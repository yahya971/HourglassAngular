export class NutritionAnalysisRequest {
  title: string;
  ingr: string[];
  sumary: string;
  ttime: string;
  prep: string;



  constructor(title: string, ingr: string[], sumary: string, ttime: string, prep: string) {
    this.title = title;
    this.ingr = ingr;
    this.sumary = sumary;
    this.ttime = ttime;
    this.prep = prep;
  }
}
