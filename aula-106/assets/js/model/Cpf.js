export class Cpf {
  #cpf;

  constructor(cpf){
    this.#cpf = cpf.replace(/\D+/g, '');
  };

  get getCpf(){
    return this.#cpf
  };

  set setCpf(cpf) {
    this.#cpf = cpf.replace(/\D+/g, '');
  }

  validateCpf() {
    let validatedCpf = Array.from(this.#cpf).map(Number).slice(0, -2);
    let cpfArray;
    
    while(validatedCpf.length < 11) {
      let factor = validatedCpf.length + 1;
      cpfArray = validatedCpf.map( (element) => {
        element *= factor;
        factor--;
        return element;
      })

      let sum = cpfArray.reduce( (acumulator, value) => acumulator += value, 0);
      let digit = 11 - (sum % 11);
      
      if (digit > 9) {
        validatedCpf.push(0);
      } else {
        validatedCpf.push(digit);
      }
    }

    return (validatedCpf.toString().replace(/\D+/g, '') === this.#cpf);
  }
}