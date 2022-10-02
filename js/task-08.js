const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements[0].value;
  const password = event.currentTarget.elements[1].value;
  if (!email || !password) {
    return alert("Заполните все поля формы");
  }

  const obj = {
    email,
    password,
  };
  console.log(obj);
}
