function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {

    let price = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (typeOfGroup === "Students") {
                price = 8.45;
            } else if (typeOfGroup === "Business") {
                price = 10.90;
            } else if (typeOfGroup === "Regular") {
                price = 15;
            }
            break;
        case "Saturday":
            if (typeOfGroup === "Students") {
                price = 9.80;
            } else if (typeOfGroup === "Business") {
                price = 15.60;
            } else if (typeOfGroup === "Regular") {
                price = 20;
            }
            break;
        case "Sunday":
            if (typeOfGroup === "Students") {
                price = 10.46;
            } else if (typeOfGroup === "Business") {
                price = 16;
            } else if (typeOfGroup === "Regular") {
                price = 22.50;
            }
            break;
    }

    let totalPrice = 0;
    if (typeOfGroup === "Students" && groupOfPeople >= 30) {
        totalPrice = (groupOfPeople * price) * 0.85;
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
        return;
    }
    if (typeOfGroup === "Business" && groupOfPeople >= 100) {
        totalPrice = (groupOfPeople - 10) * price;
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
        return;
    }
    if (typeOfGroup === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice = (groupOfPeople * price) * 0.95;
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
        return;
    }
    totalPrice = groupOfPeople * price;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}


vacation(30,
    "Students",
    "Sunday");