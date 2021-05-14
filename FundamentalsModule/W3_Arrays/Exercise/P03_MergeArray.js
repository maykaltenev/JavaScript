function mergeArray(firstArray, secondArray) {
    let thirdArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        let sum = 0;
        if (i % 2 == 0) {
            sum = Number(firstArray[i]) + Number(secondArray[i]);
        } else { 
            sum = firstArray[i] + secondArray[i];
        }
        thirdArray.push(sum);
    }
    console.log(thirdArray.join(' - '));
}
mergeArray(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);