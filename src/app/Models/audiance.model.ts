export class Audiance {
  id: number;
  sex: string;
  height: number;
  objectiveWeight: number;
  frame: string;
  fatStorage: string;
  silhouete: string;
  overWeightCause: string;

  constructor(id: number, sex: string, height: number, objectiveWeight: number, frame: string,
              fatStorage: string, silhouete: string, overWeightCause: string) {
    this.id = id;
    this.sex = sex;
    this.height = height;
    this.objectiveWeight = objectiveWeight;
    this.frame = frame;
    this.fatStorage = fatStorage;
    this.silhouete = silhouete;
    this.overWeightCause = overWeightCause;
  }
}
