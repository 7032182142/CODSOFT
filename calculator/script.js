let currentInput = '';
let previousInput = '';
let operation = null;

function appendNumber(number) {
    currentInput += number.toString();
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return; // Prevent setting operation with no number

    if (previousInput !== '') {
        calculate();
    }

    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}

function calculate() {
    let result;

    if (currentInput === '' || previousInput === '') return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}
