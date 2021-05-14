function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let destination = '';
    let booked = '';
    if (budget <= 100) {
        destination = "Somewhere in Bulgaria"
        if (season == "summer") {
            price = budget * 0.30;
            booked = "Camp";
        } else {
            booked = "Hotel"
            price = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Somewhere in Balkans";
        if (season == "summer") {
            booked = "Camp";
            price = budget * 0.4;
        } else {
            booked = "Hotel"
            price = budget * 0.8;
        }
    } else {
        destination = "Somewhere in Europe";
        booked = "Hotel"
        price = budget * 0.9;
    }
    console.log(`${destination}`);
    console.log(`${booked} - ${price.toFixed(2)}`);
}


