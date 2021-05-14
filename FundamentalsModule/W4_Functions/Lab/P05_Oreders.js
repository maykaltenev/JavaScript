function orders(product, n) {

    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;
    let result = 0;
    switch (product) {
        case 'coffee':
            result = coffee * n;
            break;
        case 'coke':
            result = coke * n;
            break;
        case 'water':
            result = water * n;
            break;
        case 'snacks':
            result = snacks * n;
            break;
    }
    console.log(result.toFixed(2));
}