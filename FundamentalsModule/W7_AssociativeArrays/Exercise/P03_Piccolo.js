function piccolo(input) {

    let parking = {}
    for (const line of input) {

        let [direction, carNumber] = line.split(' ');
        if (direction == 'IN') {
            parking[carNumber] = 1;
        } else {
            delete parking[carNumber];
        }
    }
    console.log(parking);
}