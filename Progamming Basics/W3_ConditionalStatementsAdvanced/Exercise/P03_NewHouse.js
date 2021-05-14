function newHouse(input){

    let flowers = input[0];
    let numbers = Number(input[1]);
    let budget = Number(input[2]);
    let result = 0;

    switch(flowers){
        case "Roses":
            result = numbers *5;
            if(numbers > 80){
                result *= 0.90;
            }
            break;
        case "Dahlias":
            result = numbers *3.80;
            if(numbers > 90){
                result *= 0.85;
            }
            break;
        case "Tulips":
            result = numbers *2.80;
            if(numbers > 80){
                result *= 0.85;
            }
            break;
        case "Narcissus":
            result = numbers *3;
            if(numbers < 120){
                result *= 1.15;
            }
            break;
        case "Gladiolus":
            result = numbers *2.5;
            if(numbers < 80){
                result *= 1.20;
            }
            break;
    }
    if(budget >= result){
        console.log(`Hey, you have a great garden with ${numbers} ${flowers} and ${(budget-result).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money, you need ${(result - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus",
"119",
"360"])



