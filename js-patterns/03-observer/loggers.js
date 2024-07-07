import Observable from "./observable.js";

function loggerOne(data) {
  console.log(`Logger 1 - ${data}`);
}

function loggerTwo(data) {
  console.log(`Logger 2 - ${data}`);
}
function loggerThree(data) {
  console.log(`Logger 3 - ${data}`);
}
function loggerFour(data) {
  console.log(`Logger 4 - ${data}`);
}
Observable.subscribe(loggerOne);
Observable.subscribe(loggerTwo);
Observable.subscribe(loggerThree);

export { loggerFour };
