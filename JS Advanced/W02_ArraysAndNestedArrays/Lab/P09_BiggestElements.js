function biggestElement(matrix){
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let row of matrix){
        for(let num of row){
            if(num > biggest){
                biggest = num;
            }
        }
    }
    return biggest;
}