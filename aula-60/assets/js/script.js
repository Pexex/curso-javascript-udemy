const firstInput = document.querySelector('#first-number');
const secondInput = document.querySelector('#second-number');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!firstInput.value){
        setResult(createP("Preencha os campos corretamente!", false));
        return;
    }
    if (!secondInput.value ){
        setResult(createP("Preencha os campos corretamente!", false));
        return;
    }

    let higherNumber = checkNumbers();
    
    setResult(createP(higherNumber, true));


})

function checkNumbers(){
    let firstNumber = Number(firstInput.value);
    let secondNumber = Number(secondInput.value);
    return (firstNumber > secondNumber) ? `O maior número entre ${firstNumber} e ${secondNumber} é: ${firstNumber}` : `O maior número entre ${firstNumber} e ${secondNumber} é: ${secondNumber}`;
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
    result.innerHTML = " ";
    result.appendChild(paragraph);
}



