import Observable from "./observable.js";

function observerOne(data) {
  console.log(`Observer 1 - ${data}`);
}

function observerTwo(data) {
  console.log(`Observer 2 - ${data}`);
}
function observerThree(data) {
  console.log(`Observer 3 - ${data}`);
}
function observerFour(data) {
  console.log(`Observer 4 - ${data}`);
}
Observable.subscribe(observerOne);
Observable.subscribe(observerTwo);
Observable.subscribe(observerThree);

export { observerFour };
