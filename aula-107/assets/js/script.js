import { User } from "./model/User.js";

const form = document.querySelector(".form");
const name = form.querySelector(".name");
const lastname = form.querySelector(".lastname");
const cpf = form.querySelector(".cpf");
const password = form.querySelector(".password");
const repeatPassword = form.querySelector(".repeat-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !name.value ||
    !lastname.value ||
    !cpf.value ||
    !password.value ||
    !repeatPassword.value
  ) {
    return false;
  }
  const user = new User(form);
});
