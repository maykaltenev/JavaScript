function cinema(input) {
    let type = input[0];
    let rows = input[1];
    let columns = input[2];
    let income = 0;
    let area = rows * columns;


    switch (type) {
        case "Premiere":
            income = area * 12.00;
            break;
        case "Normal":
            income = area * 7.50;
            break;
        case "Discount":
            income = area * 5.00;
            break;
    }
    console.log(`${income.toFixed(2)}`);
}