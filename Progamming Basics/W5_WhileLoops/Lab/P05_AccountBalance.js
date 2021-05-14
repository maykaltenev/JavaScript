function accountBalance(input) {

    let index = 0;
    let total = 0;
    let text = input[index];
    index++;

    while (text !== "NoMoreMoney") {
        let sum = Number(text);
        if (sum < 0) {
            console.log("Invalid operation!");
            console.log(`Total: ${total.toFixed(2)}`);
            return;
        }
        total += sum;
        console.log(`Increase: ${sum.toFixed(2)}`);
       text = input[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);