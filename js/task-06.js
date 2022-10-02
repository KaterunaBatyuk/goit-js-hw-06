const validInput = document.querySelector("#validation-input");
validInput.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (validInput.value.length === Number(validInput.dataset.length)) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
    return;
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");

    console.log("Инпут потерял фокус-событие blur");
  }
}
