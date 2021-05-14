function operationsBetwenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let action = input[2];
    let result = 0;

    switch (action) {
        case "+":
            result = n1 + n2;
            if (result % 2 == 0) {
                console.log(`${n1} + ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} + ${n2} = ${result} - odd`);
            }
            break;
        case "-":
            result = n1 - n2;
            if (result % 2 == 0) {
                console.log(`${n1} - ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} - ${n2} = ${result} - odd`);
            }
            break;
        case "*":
            result = n1 * n2;
            if (result % 2 == 0) {
                console.log(`${n1} * ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} * ${n2} = ${result} - odd`);
            }
            break;
        case "/":
            result = n1 / n2;
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
                return;
            } else {
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);

            }
            break;
        case "%":
            result = n1 % n2;
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
                return;
            } else {
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;
    }

}
operationsBetwenNumbers(["10",
"3",
"%"]);