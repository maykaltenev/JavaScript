function printEverySecondN(input, n) {

    let result = [];
    for (let i = 0; i < input.length; i += n) {
        const element = input[i];
        result.push(element);
    }
    return result;
}
console.log(printEverySecondN(['5',
    '20',
    '31',
    '4',
    '20'],
    2));
