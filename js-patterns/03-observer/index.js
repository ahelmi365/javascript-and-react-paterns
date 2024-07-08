import Observable from "./observable.js";
import "./observers.js";
import { observerFour } from "./observers.js";
const notifyBtn = document.getElementById("notify");
const subscribeBtn = document.getElementById("subscribe");
const unsubscribeBtn = document.getElementById("unsubscribe");

notifyBtn.addEventListener("click", () => {
  Observable.notify("New Data is comming...!");
});

subscribeBtn.addEventListener("click", () => {
  Observable.subscribe(observerFour);
});
unsubscribeBtn.addEventListener("click", () => {
  Observable.unsubscript(observerFour);
});
