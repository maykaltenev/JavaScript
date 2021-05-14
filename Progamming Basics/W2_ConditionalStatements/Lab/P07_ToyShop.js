function toyShop(input){

    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let chimneys = Number(input[5]);

    let pricePuzzle = 2.60 * puzzles;
    let priceТalkingDolls = 3.00 * talkingDolls;
    let priceТeddyBears = 4.10 * teddyBears;
    let priceМinions = 8.20 * minions;
    let priceChimneys = 2.00 * chimneys;

    let totalPrice = pricePuzzle + priceТalkingDolls + priceТeddyBears + priceChimneys + priceМinions;
    let countItems = puzzles + talkingDolls + teddyBears + minions+chimneys;

    if(countItems >= 50){
        let discountPrice = 0.25* totalPrice;
        totalPrice -= discountPrice;
    }
    let priceRent = 0.10 * totalPrice;
    let win = totalPrice - priceRent;
    let result = 0;
    if (win >= excursionPrice){
        result = win - excursionPrice;
        console.log(`Yes! ${result.toFixed(2)} lv left.`);
    } else{
        result = excursionPrice- win;
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);


