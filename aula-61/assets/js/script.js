const widthInput = document.querySelector('#largura');
const heigthInput = document.querySelector('#altura');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!widthInput.value){
        setResult(createP("Preencha os campos corretamente!", false));
        return;
    }
    if (!heigthInput.value ){
        setResult(createP("Preencha os campos corretamente!", false));
        return;
    }
    
    setResult(createP(imgOrientation(), true));


})

function imgOrientation(){
    let width = Number(widthInput.value);
    let heigth = Number(heigthInput.value);
    return (width > heigth) ? `A imagem com largura ${width}px e altura ${heigth}px está no modo paisagem!` : `A imagem com largura ${width}px e altura ${heigth}px está no modo retrato!`;
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



