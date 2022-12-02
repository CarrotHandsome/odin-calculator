const numberGridSize = 512; //pixels
const buttonSize = numberGridSize / 3;
let numberGrid;

let currentNumber = 0;
let operandA = null;
let operandB = null;
let currentOperator = null;


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
// function getOperandA() { return operandA; }
// function setOperandA(operand) { operandA = operand; }
// function getOperandB() { return operandB; }
// function setOperandB(operand) { operandB = operand; }

function onNumberClick() {
    const numberClicked = parseInt(this.innerHTML);    
    setCurrentNumber((currentNumber * 10) + numberClicked);
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

function buildOperators() {
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    const equalsButton = document.getElementById('equals');

    addButton.addEventListener('click', (e) => {
        if (operandA == null && currentOperator == null) {
            operandA = currentNumber;
            currentOperator = add;            
            setCurrentNumber(0);            
        }
    });
    subtractButton.addEventListener('click', (e) => {
        if (operandA == null && currentOperator == null) {
            operandA = currentNumber;
            currentOperator = subtract;            
            setCurrentNumber(0);            
        }
    });
    multiplyButton.addEventListener('click', (e) => {
        if (operandA == null && currentOperator == null) {
            operandA = currentNumber;
            currentOperator = multiply;            
            setCurrentNumber(0);            
        }
    });
    divideButton.addEventListener('click', (e) => {
        if (operandA == null && currentOperator == null) {
            operandA = currentNumber;
            currentOperator = divide;            
            setCurrentNumber(0);            
        }
    });
    equalsButton.addEventListener('click', (e) => {        
        if (operandA != null && currentOperator != null && operandB == null) {            
            operandB = currentNumber;
            setCurrentNumber(currentOperator(operandA, operandB));
            operandA = null;
            operandB = null;
            currentOperator = null;
        }
    });
}
function setCurrentNumber(number) {
    currentNumber = number;
    document.getElementById("display").innerText = currentNumber;
}
window.onload = function() {
    numberGrid = document.querySelector('.grid-numbers');
    numberGrid.style.gridTemplateColumns = `repeat(3, ${buttonSize}px)`;
    buildNumberGrid();
    buildOperators();
    setCurrentNumber(0);
};