export class SignUpInfo {
  username: string;
  email: string;
  name: string;
  lastname: string;
  role: string[];
  password: string;

  constructor(username: string, email: string, name: string, lastname: string, password: string) {
    this.username = username;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.role = ['user'];
    this.password = password;
  }
}
