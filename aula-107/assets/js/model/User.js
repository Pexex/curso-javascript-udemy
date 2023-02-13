export class User {
  #name;
  #lastname;
  #cpf;
  #username;
  #password;

  constructor(form) {
    this.#name = form.querySelector(".name").value;
    this.#lastname = form.querySelector(".lastname").value;
    this.#cpf = form.querySelector(".cpf").value.replace(/\D+/g, "");
    this.#username = form.querySelector(".username").value;
    this.#password = form.querySelector(".password").value;
  }

  get getName() {
    return this.#name;
  }

  set setName(name) {
    this.#name = name;
  }

  get getLastname() {
    return this.#lastname;
  }

  set setLastame(lastname) {
    this.#lastname = lastname;
  }

  get getCpf() {
    return this.#cpf;
  }

  set setCpf(cpf) {
    this.#cpf = cpf.replace(/\D+/g, "");
  }

  get getUsername() {
    return this.#username;
  }

  set setUsername(username) {
    this.#username = username;
  }

  get getPassword() {
    return this.#password;
  }

  set setPassword(password) {
    this.#password = password;
  }

  validateCpf() {
    let validatedCpf = Array.from(this.#cpf).map(Number).slice(0, -2);
    let cpfArray;

    while (validatedCpf.length < 11) {
      let factor = validatedCpf.length + 1;
      cpfArray = validatedCpf.map((element) => {
        element *= factor;
        factor--;
        return element;
      });

      let sum = cpfArray.reduce(
        (acumulator, value) => (acumulator += value),
        0
      );
      let digit = 11 - (sum % 11);

      if (digit > 9) {
        validatedCpf.push(0);
      } else {
        validatedCpf.push(digit);
      }
    }

    return validatedCpf.toString().replace(/\D+/g, "") === this.#cpf;
  }

  checkUsernameDigits() {
    return /^[A-Za-z0-9]*$/.test(this.#username);
  }

  checkUsernameLength() {
    this.#username.length > 2 && this.#username < 13 ? true : false;
  }

  checkPasswordLength() {
    this.#password.length > 5 && this.#password.length < 13 ? true : false;
  }
}
