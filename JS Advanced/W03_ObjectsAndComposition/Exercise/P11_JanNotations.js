function janNotations(inputArr) {

    let operands = [];
    let wasWrong = false;

    for (let index = 0; index < inputArr.length; index++) {
        if (typeof inputArr[index] === 'number') {

            operands.push(inputArr[index]);
        } else {
            let operator = inputArr[index];
            if(operands.length < 2){
                console.log('Error: not enough operands!');
                wasWrong = true;
                break;
            }

            let operand2 = operands.pop();
            let operand1 = operands.pop();
            let result = applyOperation = (operand1, operand2, operator);
            operands.push(result);
        }

    }
    if(operands.length > 1 && wasWrong === false){
        console.log('Error: too many operands!');
    } else if(wasWrong === true) {
        console.log(operands[0]);
    }

    function applyOperation(operand1, operand2, operator) {
        const arithmeticalOperation = {
            '+': () => operand1 + operand2,
            '-': () => operand1 - operand2,
            '/': () => operand1 / operand2,
            '*': () => operand1 * operand2,
        }
        return arithmeticalOperation[operator]();
    }
}


console.log(janNotations([7,
    33,
    8,
    '-']))