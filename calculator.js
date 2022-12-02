const numberGridSize = 512; //pixels
const buttonSize = numberGridSize / 3;
let numberGrid;


function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(a, b, func) {
    return func(a, b);
}

function buildNumberGrid() {    
    for (let i = 9; i >= 0; i--) {
        const num = document.createElement('button');
        num.classList.add("number");
        num.style.height = `${buttonSize}px`;
        num.innerHTML = i;
        numberGrid.appendChild(num);
    }
}
window.onload = function() {
    numberGrid = document.querySelector('.grid-numbers');
    numberGrid.style.gridTemplateColumns = `repeat(3, ${buttonSize}px)`;
    buildNumberGrid();
};