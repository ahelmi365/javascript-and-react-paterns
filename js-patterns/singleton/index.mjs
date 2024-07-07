// using the Singleton Counter by class
import singletonCounter from "./singletonCounter.mjs";

// using the Singleton Counter by Object
// import singletonCounter from "./singletonCounterObj.mjs";

const countSpan = document.getElementById("count");
countSpan.textContent = singletonCounter.getCount();

// ++
const incrementBtn = document.getElementById("increment");
incrementBtn.addEventListener("click", () => {
  countSpan.textContent = singletonCounter.increment();
});

// --
const decrementBtn = document.getElementById("decrement");
decrementBtn.addEventListener("click", () => {
  countSpan.textContent = singletonCounter.decrement();
});
