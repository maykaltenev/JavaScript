function lastKNumbers(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let indexSequence = sequence.slice(startIndex, i);
        let sum = 0;
        for (let j = 0; j < indexSequence.length; j++) {
            sum  += indexSequence[j];
            
        }
        sequence[i] = sum;
    }
    return sequence.join(' ');
}
console.log(lastKNumbers(6,3))