function rotateArray(array, rotations) {

    for (let i = 0; i < rotations; i++) {
        const element = array.pop();
        array.unshift(element);
    }
    return array.join(' ');

}


console.log(rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));