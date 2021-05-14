function hotelRoom(input) {
    let month = input[0];
    let night = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;


    switch (month) {
        case "May":
        case "October":
            if (night > 7  && night <=14) {
                priceStudio = (night * 50) * 0.95;
                priceApartment = night * 65;
            } else if (night > 14) {
                priceStudio = (night * 50) * 0.70;
                priceApartment = (night * 65) * 0.90;
            } else {
                priceStudio = night * 50;
                priceApartment = night * 65;
            }
            break;
        case "June":
        case "September":
            if (night > 14) {
                priceStudio = (night * 75.20) * 0.80;
                priceApartment = (night * 68.70) * 0.90;
            } else {
                priceStudio = night * 75.20;
                priceApartment = night * 68.70;
            }
            break;
        case "July":
        case "August":
            priceStudio = night * 76
            if (night > 14) {
                priceApartment = (night * 77) * 0.9;
            } else{
                priceApartment = night * 77;
            }
            break;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
   console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May",
"15"]);