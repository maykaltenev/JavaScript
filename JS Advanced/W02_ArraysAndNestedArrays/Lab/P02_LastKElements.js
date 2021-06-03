function lastKNumber(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
        let lastKNumber = result.slice(-k);
        let sum = 0;
        for (let num of lastKNumber) {
            sum += num;
        }
        result.push(sum);
    }
    return result;
}
lastKNumber(6, 3);