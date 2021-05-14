function poop(arr) {

    let lastElement = arr[arr.length - 1];

    arr.length = arr.length - 1;

    return lastElement;
}

let numbers = [1, 2, 3, 4, 5, 6];
let result = poop(numbers);