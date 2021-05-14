function changeBureau(input) {
    let bitcoin = 1168;
    let yuan = 0.15;
    let USD = 1.76;
    let EUR = 1.95;

    let coins = Number(input[0]);
    let yuanAmount = Number(input[1]);
    let commission = Number(input[2]);


    let sumBitcoins = coins * bitcoin;
    let sumYuan = yuan * yuanAmount;
    let yuanToBGN = sumYuan * USD;
    let total = sumBitcoins + yuanToBGN;
    let totalToEuro = total / EUR;
    if (commission == 0) {
        commission == 1;
    }
    let afterCommission = totalToEuro - (totalToEuro * commission / 100);
    console.log(`${afterCommission.toFixed(2)}`);
}

changeBureau(["7",
"50200.12",
"3"]);