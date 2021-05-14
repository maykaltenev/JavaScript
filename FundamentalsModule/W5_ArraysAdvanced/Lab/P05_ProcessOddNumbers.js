function processOddNumbers(numbers) {
    let result = numbers
        .filter((numbers, i) => i % 2 !== 0)
        .map((numbers) => numbers * 2)
        .reverse();


    console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);