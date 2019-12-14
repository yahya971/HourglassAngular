export class Coach {
  id: number;
  email: string;
  lastname: string;
  name: string;
  password: string;
  username: string;
  photo: any;
  age: number;
  resume: string;
  speciality: string;
  score1: number;
  score2: number;
  score3: number;
  score4: number;
  phone: string;
  experience: number;
  constructor(id, email, name, lastname, username, password, photo, age, resume,
              speciality, score1, score2, score3, score4, phone, experience) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.photo = photo;
    this.age = age;
    this.resume = resume;
    this.experience = experience;
    this.phone = phone;
    this.score1 = score1;
    this.score2 = score2;
    this.score3 = score3;
    this.score4 = score4;
    this.speciality = speciality;
  }



}
