function arrayManipulation(input) {
    let numbers = input
        .shift()
        .split(' ');

    for (let line of input) {
        let [command, firstArg, secondArg] = line.split(' ');

        if (command === 'Add') {
            numbers.push(firstArg);
        } else if (command === 'Remove') {
            let index = numbers.indexOf(firstArg);

            if (index !== -1) {
                numbers.splice(index, 1);
            }
        } else if (command === 'RemoveAt') {
            let index = Number(firstArg);
            numbers.splice(index, 1);
        } else {
            let index = Number(secondArg);
            numbers.splice(index, 0, firstArg);
        }
    }
    return numbers.map(Number).join(' ');
}