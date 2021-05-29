function aggregateElements(input) {

    let sum = 0;
    let sum2 = 0;
    let concatResult = '';
    for (let i = 0; i < input.length; i++) {
        let currentItem = input[i];
        sum += currentItem;
        concatResult += currentItem;
        sum2 += 1 / currentItem;
    }
    console.log(sum);
    console.log(sum2);
    console.log(concatResult);
}

aggregateElements([1, 2, 3]);