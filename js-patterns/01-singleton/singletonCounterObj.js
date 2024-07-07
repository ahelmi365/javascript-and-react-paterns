console.log("hello from singletonCounterObj.js");
let counter = 0;

const counterObj = {
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
};

const singletonCounterObj = Object.freeze(counterObj);

export default singletonCounterObj;
