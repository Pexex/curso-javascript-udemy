const paragrafos = document.querySelectorAll('.paragrafos p');
const colorSelector = document.querySelector('#color-input');

colorSelector.addEventListener("input", (e) => {
    for (let p of paragrafos){
    p.style.color = colorSelector.value;
}
})