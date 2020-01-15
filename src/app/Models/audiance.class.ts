export class Audiance {
  sex: string;
  height: number;
  objectiveWeight: number;
  frame: string;
  fatStorage: string;
  silhouette: string;
  overWeightCause: string;
  constructor(sex, h, o, f, fat, sil, ov) {
    this.sex = sex;
    this.fatStorage = fat;
    this.frame = f;
    this.height = h;
    this.objectiveWeight = o;
    this.overWeightCause = ov;
    this.silhouette = sil;
  }
}
