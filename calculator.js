const numberGridSize = 512; //pixels
const buttonSize = numberGridSize / 3;
let numberGrid;

let currentNumber = 0;
let operandA;
let operandB;
let currentOperator;


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

function onNumberClick() {
    const numberClicked = parseInt(this.innerHTML);
    currentNumber = (currentNumber * 10) + numberClicked;
    document.getElementById("display").innerText = currentNumber;
}

function buildNumberGrid() {    
    for (let i = 9; i >= 0; i--) {
        const num = document.createElement('button');
        num.classList.add("number");
        num.style.height = `${buttonSize}px`;
        num.innerText = i;
        num.addEventListener('click', onNumberClick);
        numberGrid.appendChild(num);
    }
}


window.onload = function() {
    numberGrid = document.querySelector('.grid-numbers');
    numberGrid.style.gridTemplateColumns = `repeat(3, ${buttonSize}px)`;
    buildNumberGrid();
};