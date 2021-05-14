function equalSum(arr) {
    let isEqual = false;
    for (let i = 0; i < arr.length; i++) {
        let rightSum = 0;
        let leftSum = 0;
        //rightSum
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        //leftSum
        for (let l = 0; l < i ; l++) {
            leftSum += arr[l];
        }
        if (leftSum == rightSum) {
            isEqual = true;
            console.log(i);
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);