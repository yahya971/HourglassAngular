export class Coach {
  id: number;
  email: string;
  lastname: string;
  name: string;
  password: string;
  username: string;

  constructor(id, email, name, lastname, username, password) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
  }



}
