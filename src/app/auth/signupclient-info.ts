export class SignUpClientInfo {
  username: string;
  email: string;
  name: string;
  lastname: string;
  role: string[];
  password: string;
  age: number;
  currentWeight: number;
  desiredWeight: number;
  fatDestribution: any;
  frame: any;
  height: number;
  photo: any;
  sex: any;
  silhouette: any;


  constructor(username: string, email: string, name: string, lastname: string, password: string, age: number,
              currentWeight: number, desiredWeight: number, fatDestribution: any, frame: any, height: number,
              photo: any, sex: any, silhouette: any) {
    this.username = username;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.role = ['client'];
    this.password = password;
    this.age = age;
    this.currentWeight = currentWeight;
    this.desiredWeight = desiredWeight;
    this.fatDestribution = fatDestribution;
    this.frame = frame;
    this.height = height;
    this.photo = photo;
    this.sex = sex;
    this.silhouette = silhouette;
  }
}
