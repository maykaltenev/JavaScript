function sumEvenNumbers(arr) {
    for (let i = 0; i < arr.leng; i++) {
        arr[i] = Number(arr[i]);
    }
    let evenSum = 0;
    let oddSum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else{
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}