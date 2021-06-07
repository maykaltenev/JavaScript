function magicMatrix(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let curRow = matrix[row];
        let sum = 0;
        for (let col = 0; col < matrix[0].length; col++) {
            let el = matrix[row][col]
            sum += el;


        }

    }

}