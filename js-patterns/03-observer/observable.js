const observers = [];
const Observable = {
  notify: (data) => {
    console.log({ observers });
    observers.forEach((observer) => observer(data));
  },
  subscribe: (func) => {
    if (observers.includes(func)) {
      return;
    }
    observers.push(func);
  },
  unsubscript: (func) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
};

export default Object.freeze(Observable);
