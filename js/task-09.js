function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanChangeColor = document.querySelector("span");
const body = document.querySelector("body");
const TargetBtn = document.querySelector("button");

TargetBtn.addEventListener("click", onTargetBtnClick);

function onTargetBtnClick(event) {
  const randomColor = getRandomHexColor();
  spanChangeColor.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}
