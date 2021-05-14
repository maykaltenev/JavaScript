function findTheLongestSequence(array) {
    let sequence = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let currSequence = [element];
        for (let j = i + 1; j < array.length; j++) {
            if (element == array[j]) {
                currSequence.push(element);

            } else {
                break;
            }
        }
        if (sequence.length < currSequence.length) {
            sequence = currSequence;
        }
    }
    console.log(sequence.join(' '));
}