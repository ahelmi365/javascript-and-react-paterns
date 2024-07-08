function CreateUser(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}

CreateUser.prototype.checkLastOnline = () => {
  console.log(`Last time ${this.firstName} was online is ${Date.mow()}`);
};
CreateUser.prototype.sendEmail = () => {
  console.log(`Email was sent to ${this.email}`);
};
CreateUser.prototype.delete = () => {
  console.log("User removed");
};

const user = new CreateUser("Ali", "Helmi", "ahelmi365@gmail.com");

console.log(user);
