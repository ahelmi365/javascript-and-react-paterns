const person = {
  name: "Ali Helmi",
  age: 35,
  position: "Frontend Developer",
  city: "Cairo",
};

// Proxy using get() and set()
// const personProxy = new Proxy(person, {
//   get: (target, prop) => {
//     return target[prop];
//   },

//   set: (target, prop, value) => {
//     target[prop] = value;
//     return true;
//   },
// });

//  Proxy using Reflect.get() and Reflect.set()
const personProxy = new Proxy(person, {
  get: (target, prop) => {
    return Reflect.get(target, prop);
  },
  set: (target, prop, value) => {
    return Reflect.set(target, prop, value);
  },
});

console.log("Before update:");
console.log(personProxy.name);
console.log(personProxy.age);

personProxy.name = "Ahmed Mohamed";
personProxy.age = 40;

console.log("After update:");
console.log(personProxy.name);
console.log(personProxy.age);

// to prevent update object property
Object.defineProperty(person, "name", {
  writable: false,
  configurable: false,
});

console.log("After preventing update person name:");
personProxy.name = "Ahmed Mohamed";
console.log(personProxy.name);
