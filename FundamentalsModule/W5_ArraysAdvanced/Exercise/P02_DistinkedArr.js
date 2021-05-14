function distinktedArr(arr) {
    let dist = [];

    for (const n of arr) {
        if (!dist.includes(n)) {
            dist.push(n);
        }
    }
    return dist.join(' ');

}