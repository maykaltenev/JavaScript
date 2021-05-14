function oddEvenSum(n) {

    let digitsArray = splitNumber(n);
    let sums = sumsArray(digitsArray);
    let result = `Odd sum = ${sums[1]}, Even sum = ${sums[0]}`;
    function splitNumber(num) {
        return num.toString().split('');
    }

    function sumsArray(arr) {
        let evenSum = 0;
        let oddSum = 0;
        for (let  n of arr) {
            n = Number(n);
            if (n % 2 == 0) {
                evenSum += n;
            } else {
                oddSum += n;
            }
        }
        return [evenSum, oddSum];
    }
    return result;
}