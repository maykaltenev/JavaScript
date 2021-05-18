function piccolo(input) {

    let parking = {}
    for (const line of input) {

        let [direction, carNumber] = line.split(', ');
        if (direction == 'IN') {
            parking[carNumber] = 1;
        } else {
            delete parking[carNumber];
        }
    }

    let result = Object.keys(parking)
        .sort((a, b) => a.localeCompare(b))
        .join('\n');
    return result ? result : 'Parking Lot is Empty';
}