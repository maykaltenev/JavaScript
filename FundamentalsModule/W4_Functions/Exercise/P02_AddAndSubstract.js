function addAndSubtract(x, y, z) {
    let sum = function sum(a, b) {
        return a + b;
    }
    let subtract = function subtract(a, b) {
        return a - b;
    }

    return subtract(sum(x, y), z);
}
let result = addAndSubtract([23, 6, 10]);