function sumOfTwoNumbers(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let flag = false;
    let combinations = 0;
    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {

            combinations++;
            if (i + j == c) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${c})`);
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (!flag) {
        console.log(`${combinations} combinations - neither equals ${c}`);
    }
}
sumOfTwoNumbers(["23", "24", "20"]);