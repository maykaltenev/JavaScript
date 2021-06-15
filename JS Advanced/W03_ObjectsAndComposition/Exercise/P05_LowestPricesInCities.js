function lowestPriceInCities(array) {

    let obj = {};
    for (const line of array) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        obj[product] ? obj[product][town] = price : obj[product] = { [town]: price };

    }
    for (const key in obj) {
        let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
        console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}
console.log(lowestPriceInCities(
    ['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999']
));