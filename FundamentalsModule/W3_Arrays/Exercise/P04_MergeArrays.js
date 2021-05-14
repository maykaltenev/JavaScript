function mergeArray(firstArray, n) {

    for (let i = 0; i < n; i++) {
        let element = firstArray.shift();
        firstArray.push(element);
    }
    console.log(firstArray.join(' '));
}
mergeArray('[51, 47, 32, 61, 21]',
    '2');