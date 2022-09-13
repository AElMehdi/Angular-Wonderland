export class User {
  firstname: string;
  lastname: string;
  phone?: number;

  constructor(firstname: string, lastname: string, phone?: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    phone = phone;
  }
}
