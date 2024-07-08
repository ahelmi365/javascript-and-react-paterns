const observers = [];
const Observable = {
  notify: (data) => {
    console.log({ observers });
    observers.forEach((observer) => observer(data));
  },
  subscribe: (observer) => {
    if (observers.includes(observer)) {
      return console.log("Observer has been attached already.");
    }
    observers.push(observer);
    console.log("Attached an observer.");
  },
  unsubscript: (observer) => {
    const observerIndex = observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Nonexistent observer.");
    }
    observers.splice(observerIndex, 1);
    console.log("Detached an observer.");
  },
};

export default Object.freeze(Observable);
