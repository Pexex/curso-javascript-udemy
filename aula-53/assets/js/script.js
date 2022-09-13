const container = document.querySelector('.container');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

for (let elemento of elementos){
    const elementoCriado = document.createElement(elemento.tag);
    elementoCriado.innerHTML = elemento.texto;
    container.appendChild(elementoCriado);
}