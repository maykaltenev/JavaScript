function processOddPositions(input) {

    let odd = (input.filter((num, i) => i % 2 == 1));

    let double = odd.map(x => x * 2);

    let reverse = (double.reverse()).join(' ');

    console.log(reverse);
}

processOddPositions([10, 15, 20, 25]);