const counterValue = document.querySelector("span");

const targetBtnDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const targetBtnIncrement = document.querySelector(
  'button[data-action="increment"]'
);

console.log(targetBtnDecrement);
console.log(targetBtnIncrement);

let counter = 0;
// counterValue.textContent = counter;

targetBtnDecrement.addEventListener("click", onTargetBtnDecrementClick);

function onTargetBtnDecrementClick() {
  counter -= 1;
  counterValue.textContent = counter;
  console.log("Клик");
}

targetBtnIncrement.addEventListener("click", onTargetBtnIncrementClick);

function onTargetBtnIncrementClick() {
  counter += 1;
  counterValue.textContent = counter;
  console.log("Клик");
}
