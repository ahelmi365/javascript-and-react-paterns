import Observable from "./observable.js";
import "./loggers.js";
import { loggerFour } from "./loggers.js";
const notifyBtn = document.getElementById("notify");
const subscribeBtn = document.getElementById("subscribe");
const unsubscribeBtn = document.getElementById("unsubscribe");

notifyBtn.addEventListener("click", () => {
  Observable.notify("New Data is comming...!");
});

subscribeBtn.addEventListener("click", () => {
  Observable.subscribe(loggerFour);
});
unsubscribeBtn.addEventListener("click", () => {
  Observable.unsubscript(loggerFour);
});
