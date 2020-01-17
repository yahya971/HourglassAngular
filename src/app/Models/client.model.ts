export class Client {
  id: number;
  email: string;
  lastname: string;
  name: string;
  password: string;
  username: string;
  age: number;
  currentWeight: number;
  desiredWeight: number;
  fatDistribution: string;
  frame: string;
  height: number;
  sex: string;
  photo: any;
  silhouette: string;

  constructor(id: number, email: string, lastname: string, name: string, password: string, username: string, age: number,
              currentWeight: number, desiredWeight: number, fatDistribution: string, frame: string, height: number,
              sex: string, photo: any, silhouete: string) {
    this.id = id;
    this.email = email;
    this.lastname = lastname;
    this.name = name;
    this.password = password;
    this.username = username;
    this.age = age;
    this.currentWeight = currentWeight;
    this.desiredWeight = desiredWeight;
    this.fatDistribution = fatDistribution;
    this.frame = frame;
    this.height = height;
    this.sex = sex;
    this.photo = photo;
    this.silhouette = silhouete;
  }
}
