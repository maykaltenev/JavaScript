function aluminumJoinery(input) {

    let number = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let total = 0;
    let price = 0;

    if (number < 10) {
        console.log("Invalid order");
        return;
    }
    switch (type) {

        case '90X130':
            price = 110;
            if (number > 30 && number <= 60) {
                price *= 0.95;
            } else if (number > 60) {
                price *= 0.92;
            }
            break;
        case '100X150':
            price = 140;
            if (number >= 40 && number <= 80) {
                price *= 0.94;
            } else if (number > 80) {
                price *= 0.90;
            }
            break;
        case '130X180':
            price = 190;
            if (number >= 20 && number <= 50) {
                price *= 0.93;
            } else if (number > 50) {
                price *= 0.88;
            }
            break;
        case '200X300':
            price = 250;
            if (number >= 25 && number <= 50) {
                price *= 0.81;
            } else if (number > 50) {
                price *= 0.86;
            }
            break;
    }
    price *= number;

    if (delivery ==='With delivery') {
        price += 60;
    }

    if (number > 99) {
        price *= 0.96
    }

    console.log(`${price.toFixed(2)} BGN`);
}


aluminumJoinery(["105",
"100X150",
"With delivery"]);
