import {Cpf} from "./model/Cpf.js";

// const validateButton = document.querySelector('.container button');
const cpfInput = document.querySelector('.container input');
const container = document.querySelector('.container');
const validationText = document.querySelector('#validation-text');

cpfInput.addEventListener('keyup', () => {
    let cpf = cpfInput.value;
    let cpfToVerify;
    
    
    if (!cpf.includes('.') && cpf.length === 11) {
        cpfToVerify = new Cpf(cpf);
        createElement(cpfToVerify.validateCpf());
    }
    if (cpf.includes('-') && cpf.length == 14){
        cpfToVerify = new Cpf(cpf);
        createElement(cpfToVerify.validateCpf());
    }

    
});

function createElement(cpf){
    if (cpf){
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








