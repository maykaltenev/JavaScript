function theSmallestNumber(input) {
    let n = Number(input[0]);
    if (n > 0) {
        let current = Number(input[1]);
        for (let i = 2; i <= n; i++) {
            let number = Number(input[i]);
            if (current > number) {
                current = number;
            }
        }
        console.log(current);
    }
   
}
theSmallestNumber(["3",
    "-10",
    "20",
    "-30"]);