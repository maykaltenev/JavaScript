function skiTrip(input) {

    let days = Number(input[0]);
    let room = input[1];
    let feedback = input[2];
    let result = 0;
    let nights = Number(days-1);

    if (nights < 10) {
        if (room == "room for one person") {
            result = nights * 18;
        } else if (room == "apartment") {
            result = (nights * 25) * 0.7;
        } else if (room = "president apartment") {
            result = (nights * 35) * 0.9;
        }
    } else if (nights >= 10 && nights <= 15) {
        if (room == "room for one person") {
            result = nights * 18;
        } else if (room == "apartment") {
            result = (nights * 25) * 0.65;
        } else if (room = "president apartment") {
            result = (nights * 35) * 0.85;
        }
    } else if (nights > 15) {
        if (room == "room for one person") {
            result = nights * 18;
        } else if (room == "apartment") {
            result = (nights * 25) * 0.50;
        } else if (room = "president apartment") {
            result = (nights * 35) * 0.80;
        }
    }

    if (feedback == "positive") {
        result *= 1.25;
    } else {
        result *= 0.90;
    }

    console.log(`${result.toFixed(2)}`)
}
skiTrip(["30",
"president apartment",
"negative"]);