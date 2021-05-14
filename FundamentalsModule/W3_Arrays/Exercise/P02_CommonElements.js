function commonElements(firstArray, secondArray) {
    for (let first of firstArray) {
        for (let second of secondArray) {
            if (first === second) {
                console.log(first);
            }
        }

    }
}
commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);