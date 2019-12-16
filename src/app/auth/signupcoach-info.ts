export class SignUpCoachInfo {
  username: string;
  email: string;
  name: string;
  lastname: string;
  role: string[];
  password: string;
  resume: string;
  score1: number;
  score2: number;
  score3: number;
  score4: number;
  age: number;
  photo: any;
  experience: number;
  speciality: string;
  phone: string;

  constructor(username: string, email: string, name: string, lastname: string, password: string, resume: string,
              score1: number, score2: number, score3: number, score4: number, age: number, photo: any, experience: number,
              speciality: string, phone: string) {
    this.username = username;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.role = ['coach'];
    this.password = password;
    this.resume = resume;
    this.score1 = score1;
    this.score2 = score2;
    this.score3 = score3;
    this.score4 = score4;
    this.age = age;
    this.photo = photo;
    this.experience = experience;
    this.speciality = speciality;
    this.phone = phone;

  }
}
