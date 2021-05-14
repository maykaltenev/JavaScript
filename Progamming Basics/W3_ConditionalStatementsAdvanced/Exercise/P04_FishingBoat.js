function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);
    let price = 0;
    let discount = 0;

  

    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }
    if(fisherman <= 6){
        price *= 0.90;
    } else if(fisherman<= 11 ){
        price *= 0.85;
    } else if (fisherman >12){
        price *= 0.75;
    }
    if (fisherman % 2 == 0){
        if(season !== "Autumn"){
            price *= 0.95;
        }
        
    }


    let result = 0;
    if(budget >= price){
        result = budget - price;
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`);
    } else{
        result = price - budget;
        console.log(`Not enough money! You need ${result.toFixed(2)} leva.`);
    }

}
fishingBoat(["2000",
"Winter",
"13"]);


