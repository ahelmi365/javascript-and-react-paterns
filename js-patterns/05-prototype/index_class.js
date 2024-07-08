class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  checkLastOnline() {
    console.log(`Last time ${this.firstName} was online is ${Date.mow()}`);
  }

  sendEmail() {
    console.log(`Email was sent to ${this.email}`);
  }

  delete() {
    console.log("User removed");
  }
}

const user = new User("Ali", "Helmi", "ahelmi365@gmail.com");

console.log(user);
