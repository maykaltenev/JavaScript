function bombNumber(sequence, bombArr) {

    let [bomb, power] = bombArr;

    let index = sequence.indexOf(bomb);

    while (index != - 1) {
        let start = index - power < 0 ? 0 : index - power;
        sequence.splice(start, power * 2 + 1);

        index = sequence.indexOf(bomb);
    }

    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    console.log(sum);
}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);