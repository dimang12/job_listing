export class ResumeModel {
  private id: number;
  private firstName: string;
  private lastName: string;
  private position: string;
  private location: string;
  private email: string;
  private phone: string;


  constructor(id: number, firstName: string, lastName: string, position: string, location: string, email: string, phone: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.location = location;
    this.email = email;
    this.phone = phone;
  }
}
