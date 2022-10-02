const fontSize = document.querySelector("#font-size-control");
console.log(fontSize);
fontSize.addEventListener("input", onInputFontSize);

const text = document.querySelector("#text");
console.log(text);

function onInputFontSize() {
  text.style.fontSize = fontSize.value + "px";
}
