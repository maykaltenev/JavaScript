function sumDiagonal(input) {

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    let counterOne = 0;
    let counterTwo = input.length - 1;

    for (let i = 0; i < input.length; i++) {

        sumFirstDiagonal += input[i][counterOne];
        sumSecondDiagonal += input[i][counterTwo];

        counterOne++;

        counterTwo--;
    }
    console.log(`${sumFirstDiagonal} ${sumSecondDiagonal}`);
}