function min(input) {

    let index = 0;
    let currentMax = Number.MIN_SAFE_INTEGER;
    let text = input[index];
    index++;

    while (text !== "Stop") {
        let current = Number(text);
        if (current > currentMax) {
            currentMax = current;
        }
        text = input[index];
        index++;
    }
    console.log(currentMax);
}
MaxNumber(["-1",
"-2",

"Stop"]);