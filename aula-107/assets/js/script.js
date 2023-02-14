import { User } from "./model/User.js";

const form = document.querySelector(".form");
const name = form.querySelector(".name");
const lastname = form.querySelector(".lastname");
const cpf = form.querySelector(".cpf");
const username = form.querySelector(".username");
const password = form.querySelector(".password");
const repeatPassword = form.querySelector(".repeat-password");
const modal = document.querySelector(".validation-modal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cleanForm();

  if (
    !name.value ||
    !lastname.value ||
    !cpf.value ||
    !password.value ||
    !repeatPassword.value
  ) {
    window.scrollTo(0, 0);
    document.querySelectorAll("li")[0].style.color = "red";
    return false;
  }
  document.querySelectorAll("li")[0].style.color = "black";
  const user = new User(form);
  validateForm(user);

  if (validateForm(user)) {
    modal.showModal();
    modal
      .querySelector("button")
      .addEventListener("click", () => modal.close());
  }
});

function validateForm(user) {
  if (!user.validateCpf()) {
    let error = document.createElement("p");
    error.classList.add("error-text");
    error.innerHTML = "CPF inválido";
    cpf.parentNode.insertBefore(error, cpf.nextSibling);
  }

  if (!user.checkUsernameDigits()) {
    let error = document.createElement("p");
    error.classList.add("error-text");
    error.innerHTML = "O usuário só pode conter letras e números ";
    username.parentNode.insertBefore(error, username.nextSibling);
  }

  if (!user.checkUsernameLength()) {
    let error = document.createElement("p");
    error.classList.add("error-text");
    error.innerHTML = "O usuário deve conter entre 3 e 12 caracteres";
    username.parentNode.insertBefore(error, username.nextSibling);
  }

  if (!user.checkPasswordLength()) {
    let error = document.createElement("p");
    error.classList.add("error-text");
    error.innerHTML = "O senha deve conter entre 6 e 12 caracteres";
    password.parentNode.insertBefore(error, password.nextSibling);
  }

  if (!user.checkPasswordsEqual(repeatPassword.value)) {
    let error = document.createElement("p");
    error.classList.add("error-text");
    error.innerHTML = "As senhas devem ser iguais";
    repeatPassword.parentNode.insertBefore(error, repeatPassword.nextSibling);
  }

  return true;
}

function cleanForm() {
  [...document.querySelectorAll(".error-text")].map((element) =>
    element.parentNode.removeChild(element)
  );
}
