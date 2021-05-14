function tradeCommissions(input) {
    let city = input[0];
    let volumeSales = input[1];
    let result = 0;

    if(volumeSales < 0){
        console.log("error");
        return;
    }

    switch (city) {
        case "Sofia":
            if (0 <= volumeSales && volumeSales <= 500) {
                result = volumeSales * 0.05;
                console.log(`${result.toFixed(2)}`);
            } else if (500 < volumeSales && volumeSales <= 1000) {
                result = volumeSales * 0.07;
                console.log(`${result.toFixed(2)}`);

            } else if (1000 < volumeSales && volumeSales <= 10000) {
                result = volumeSales * 0.08;
                console.log(`${result.toFixed(2)}`);
            } else if (volumeSales > 10000) {
                result = volumeSales * 0.12;
                console.log(`${result.toFixed(2)}`);
            }

            break;
        case "Varna":
            if (0 <= volumeSales && volumeSales <= 500) {
                result = volumeSales * 0.045;
                console.log(`${result.toFixed(2)}`);
            } else if (500 < volumeSales && volumeSales <= 1000) {
                result = volumeSales * 0.075;
                console.log(`${result.toFixed(2)}`);

            } else if (1000 < volumeSales && volumeSales <= 10000) {
                result = volumeSales * 0.10;
                console.log(`${result.toFixed(2)}`);
            } else if (volumeSales > 10000) {
                result = volumeSales * 0.13;
                console.log(`${result.toFixed(2)}`);
            }
            break;
        case "Plovdiv":
            if (0 <= volumeSales && volumeSales <= 500) {
                result = volumeSales * 0.055;
                console.log(`${result.toFixed(2)}`);
            } else if (500 < volumeSales && volumeSales <= 1000) {
                result = volumeSales * 0.08;
                console.log(`${result.toFixed(2)}`);

            } else if (1000 < volumeSales && volumeSales <= 10000) {
                result = volumeSales * 0.12;
                console.log(`${result.toFixed(2)}`);
            } else if (volumeSales > 10000) {
                result = volumeSales * 0.145;
                console.log(`${result.toFixed(2)}`);
            }
            break;
        default:
            console.log("error");
    }

}