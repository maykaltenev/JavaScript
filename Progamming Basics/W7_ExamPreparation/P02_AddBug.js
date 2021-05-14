function addBag(input) {

    let priceBagAbove20 = Number(input[0]);
    let kgBag = Number(input[1]);
    let daysOfTravel = Number(input[2]);
    let quantifyOfBags = Number(input[3]);
    let price = 0;
    if (kgBag < 10){
        price = 0.20 * priceBagAbove20;
    } else if(kgBag >= 10 && kgBag <= 20){
        price = 0.5 * priceBagAbove20;
    } else {
        price = priceBagAbove20;
    }

    if (daysOfTravel > 30){
        price *= 1.10;
    } else if (daysOfTravel >=7 && daysOfTravel <= 30){
        price *= 1.15;
    } else if (daysOfTravel < 7){
        price *= 1.40;
    }

    let total = quantifyOfBags * price;

    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
}


addBag(["63.80",
"23",
"3",
"1"]);