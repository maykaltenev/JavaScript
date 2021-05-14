function metricInfo(input){

    let realNumber = Number(input[0]);
    let metricInput = input[1];
    let metricOutput = input[2];

    if (metricInput === "cm"){
        realNumber *= 10;
    } else if(metricInput === "m"){
        realNumber *= 1000;
    }
    if (metricOutput === "cm"){
        realNumber /=10;
    } else if(metricOutput === "m"){
        realNumber /= 1000;
    }
    console.log(realNumber.toFixed(3));
}
metricInfo(["150","m","cm"])