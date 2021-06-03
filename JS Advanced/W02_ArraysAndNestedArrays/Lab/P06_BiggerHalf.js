function biggerHalf(input) {

    return input.sort((a, b) => a - b).splice(input.length / 2);
}