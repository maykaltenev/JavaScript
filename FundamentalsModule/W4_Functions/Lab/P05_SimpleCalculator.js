function simpleCalculator(firstOperand, secondOperand, operation) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    switch (operation) {
        case 'multiply':
            return multiply(firstOperand, secondOperand);

        case 'divide':
            return divide(firstOperand, secondOperand);
        case 'add':
            return add(firstOperand, secondOperand);
        case 'subtract':
            return subtract(firstOperand, secondOperand);

    }
    
}