function stringLength(a, b, c) {
    let first = a.length;
    let second = b.length;
    let third = c.length;
    let sum = first + second + third;
    let average = Math.trunc((first + second + third) / 3);

    console.log(sum);
    console.log(average);
}
stringLength('chocolate', 'ice cream', 'cake');