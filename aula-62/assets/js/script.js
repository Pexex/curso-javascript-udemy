const firstInput = document.querySelector('#firstNumber');
const secondInput = document.querySelector('#secondNumber');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!firstInput.value){
        setResult(createP("Preencha corretamente o campo!", false));
        return;
    }
    if (!secondInput.value){
        setResult(createP("Preencha corretamente o campo!", false));
        return;
    }

   for (let i = Number(firstInput.value); i <= Number(secondInput.value); i++){
        setResult(createP(checkNumber(i), true));
   }
})

function checkNumber(num){
    if (num % 3 == 0 && num % 5 == 0) return `${num} - FizzBuzz`;
    if (num % 3 == 0) return `${num} - Fizz`;
    if (num % 5 == 0) return `${num} - Buzz`;
    return `${num} - ${num}`;
}

function createP (msg, isValid){
    const p = document.createElement('p');

    if (!isValid) {
        p.classList.add('bad');
    } else {
        p.classList.add('paragrafo-resultado');
    }

    p.innerHTML = msg;
    return p;
}

function setResult (paragraph){
    const result = document.querySelector('#resultado');
    result.appendChild(paragraph);
}



