function addAndSubtract(array) {

    let firstSum = 0;
    for (const num of array) {
        firstSum += num
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
    }
    let newSum = 0;
    for (const num of array) {
        newSum += num;
    }
    console.log(array);
    console.log(firstSum);
    console.log(newSum);
}
