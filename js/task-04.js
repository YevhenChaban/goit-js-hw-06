const shownValue = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");

let counterValue = 0;

decrementBtn.addEventListener("click", decrementBtnHandler);
incrementBtn.addEventListener("click", incrementBtnHandler);

function decrementBtnHandler(event) {
  counterValue -= 1;
  shownValue.textContent = counterValue;
}

function incrementBtnHandler(event) {
  counterValue += 1;
  shownValue.textContent = counterValue;
}
