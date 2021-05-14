function minNumber(input){
   
    let index = 0;
    let currentMin = Number.MAX_SAFE_INTEGER;
    let text = input[index];
    index++;

    while (text !== "Stop") {
        let current = Number(text);
        if (current < currentMin) {
            currentMin = current;
        }
        text = input[index];
        index++;
    }
    console.log(currentMin);
}