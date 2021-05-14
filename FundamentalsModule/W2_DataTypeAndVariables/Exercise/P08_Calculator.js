function calculator(number, math, secondNumber) {
    let result = 0;
    if (math === "+") {
        result = number + secondNumber;
    } else if (math === "-") {
        result = number - secondNumber;
    } else if (math === "*") {
        result = number * secondNumber;
    } else if (math === "/") {
        result = number / secondNumber;
    }
    console.log(`${result.toFixed(2)}`);
}