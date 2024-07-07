import { isValidEmail, isAllLetters } from "./validators.js";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const userProxy = new Proxy(user, {
  get: (target, prop) => {
    return `${new Date()} | The value of ${prop} is ${Reflect.get(
      target,
      prop
    )}`;
  },
  set: (target, prop, value) => {
    console.log({ prop });

    if (prop === "username") {
      if (!isAllLetters(value) || value.length < 3) {
        console.log(`Not valid ${prop}`);
        // throw new Error("Error");
        return true;
      }
    } else if (prop === "email") {
      if (!isValidEmail(value)) {
        console.log(`Not valid ${prop}`);
        // throw new Error("Error");
        return true;
      }
    } else if (prop === "age") {
      if (typeof value !== "number" || value < 18) {
        console.log(`Not valid ${prop}`);
        // throw new Error("Error");
        return true;
      }
    }

    return Reflect.set(target, prop, value);
  },
});

// test get
console.log(userProxy.username);
console.log(userProxy.age);

// test set
userProxy.username = 5;
console.log(userProxy.username);
