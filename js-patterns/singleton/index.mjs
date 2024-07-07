import singletonCounter from "./singletonCounter.mjs";
const countSpan = document.getElementById("count");
countSpan.textContent = singletonCounter.getCount();

const incrementBtn = document.getElementById("increment");
incrementBtn.addEventListener("click", () => {
  countSpan.textContent = singletonCounter.increment();
});

const decrementBtn = document.getElementById("decrement");
decrementBtn.addEventListener("click", () => {
  countSpan.textContent = singletonCounter.decrement();
});
