function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const output = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
});
btnDestroy.addEventListener("click", () => {
  output.innerHTML = "";
});

function createBoxes(amount) {
  if (amount) {
    output.innerHTML = "";
    let element = "";
    for (let i = 0; i < amount; i++) {
      element += `<div style="width:${30 + i * 10}px;height:${
        30 + i * 10
      }px;background-color:${getRandomHexColor()}"></div>`;
    }
    output.innerHTML = element;
  }
}
