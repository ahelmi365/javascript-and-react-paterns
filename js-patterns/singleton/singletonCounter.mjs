console.log("hello from singletonCounter");
let instance = null;

class Counter {
  #counter;
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    this.#counter = 0;
    instance = this;
  }

  getCount() {
    return this.#counter;
  }
  increment() {
    return ++this.#counter;
  }

  decrement() {
    return --this.#counter;
  }
}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
