const weightInput = document.querySelector('#peso');
const heightInput = document.querySelector('#altura');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!weightInput.value){
        setResult(createP("Peso Invalido", false));
        return;
    }
    if (!heightInput.value){
        setResult(createP("Altura Invalida", false));
        return;
    }

    let imc = calculateImc();
    let msg = `Seu IMC é ${imc} (${getImcLevel(imc)})`;
    setResult(createP(msg, true));


})

function calculateImc(){
    let weight = Number(weightInput.value);
    let height = Number(heightInput.value);
    let imc = weight / (height ** 2);
    return imc.toFixed(2);
}

function getImcLevel(imc){
    if (imc >= 40) return "Obesidade Grau 3";
    if (imc >= 35) return "Obesidade Grau 2";
    if (imc >= 30) return "Obesidade Grau 1";
    if (imc >= 25) return "Sobrepeso";
    if (imc >= 18.5) return "Peso Normal";
    if (imc < 18.5) return "Abaixo do Peso";
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



