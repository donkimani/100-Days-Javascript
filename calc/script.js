let currentInput = '';
let currentOperation = '';
let previousInput = '';

function updateDisplay() {
    const display = document.getElementById("display");
    if (currentOperation && previousInput) {
        display.innerText = `${previousInput} ${currentOperation} ${currentInput || ''}`;
    } else if (currentInput) {
        display.innerText = currentInput;
    } else {
        display.innerText = '0';
    }
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}

function appendOperation(operation) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput !== '' && previousInput !== '') {
        calculate();
    }
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
    }
    currentOperation = operation;
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "/":
            if (current === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        case "*":
            result = prev * current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function toggleSign() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
    } else if (previousInput) {
        previousInput = (parseFloat(previousInput) * -1).toString();
    }
    updateDisplay();
}

function percentage() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
    } else if (previousInput) {
        previousInput = (parseFloat(previousInput) / 100).toString();
    }
    updateDisplay();
}