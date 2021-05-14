function barcodeGenerator(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);


    let fourthStart = (start % 10);
    let thirdStart = ((start / 10) % 10);
    let secondStart = ((start / 100) % 10);
    let firstStart = ((start / 1000) % 1000);


    let fourthEnd = end % 10;
    let thirdEnd = (end / 10) % 10;
    let secondEnd = (end / 100) % 10;
    let firstEnd = (end / 1000) % 10;
    for (i = firstStart; i <= firstEnd; i++) {
        for (j = secondStart; j <= secondEnd; j++) {
            for (k = thirdStart; k <= thirdEnd; k++) {
                for (l = fourthStart; l <= fourthEnd; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        console.log(`${i}${j}${k}${l}`);
                    }
                }
            }
        }
    }
}

barcodeGenerator(["2345",
    "6789"]);