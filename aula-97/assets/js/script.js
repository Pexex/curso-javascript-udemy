// const validateButton = document.querySelector('.container button');
const cpfInput = document.querySelector('.container input');
const container = document.querySelector('.container');
const validationText = document.querySelector('#validation-text');

cpfInput.addEventListener('keyup', () => {
    let cpf = cpfInput.value; 
    let validatedCpf;
    
    if (!cpf.includes('.') && cpf.length === 11) {
        validateCPF (cpf, createDigits(convertToArray(cpf)));
    }
    if (cpf.includes('-') && cpf.length <= 14){
        validateCPF (cpf.replaceAll(/[.-]/gi, ""), createDigits(convertToArray(cpf)));
    }
    });

function validateCPF(cpf, validatedCpf) {
    if (validatedCpf === cpf) {
            validationText.style.color = 'green';
            validationText.innerHTML = 'CPF Válido';
            validationText.style.display = 'block';
            container.style.padding = '20px 20px 30px 20px';
        } else {
            validationText.style.color = 'red';
            validationText.innerHTML = 'CPF Inválido';
            validationText.style.display = 'block';
            container.style.padding = '20px 20px 30px 20px';
        }
}

function convertToArray(cpf) {
    const cpfWithoutSimbols = cpf.replaceAll(/[.-]/gi, "");
    return Array.from(cpfWithoutSimbols).map(Number).slice(0, -2);
}

function createDigits (array) {
    let newCPF;
    while (array.length < 11){
        let factor = array.length + 1;

        newCPF = array.map(function (element) {
        element *= factor;
        factor--
        return element;
    });
    let sumTotal = newCPF.reduce((acumulator, value) => acumulator += value, 0);
    let digit = 11 - (sumTotal % 11);

    if (digit > 9) {
        array.push(0);
    } else {
        array.push(digit);
    }
    }
    return array.toString().replace(/\D+/g, '');
}



