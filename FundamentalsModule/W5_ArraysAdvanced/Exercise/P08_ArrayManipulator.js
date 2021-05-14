function arrayManipulator(arr, commands) {

    for (const line of commands) {

        let [comm, index, ...element] = line.split(' ');
        index = Number(index);

        element = element.map(Number);

        if (comm == 'add' || comm == 'addMany') {
            arr.splice(index, 0, ...element);
        } else if (comm == 'contains') {
            let el = index;
            console.log(arr.indexOf(el))
        } else if (comm == 'remove') {
            arr.splice(index, 1);
        } else if (comm == 'shift') {
            let rotations = index % arr.length;
            let splicedPart = arr.splice(0, rotations);
            arr.push(...splicedPart);
        } else if (comm == 'sumPairs') {
            for (let i = 0; i < arr.length; i++) {
                let secondEl = arr[i + 1] ? arr[i + 1] : 0;
                arr[i] += secondEl;
                arr.splice(i + 1, 1);
            }
        } else if (comm == 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);

    arrayManipulator([1, 2, 3, 4, 5],
        ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);