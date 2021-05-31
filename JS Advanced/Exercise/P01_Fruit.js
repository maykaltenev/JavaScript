function fruit(fruit, grams, pricePerKg) {
    let weightInKg = grams / 1000;
    let money = weightInKg * pricePerKg;
    return `I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`
}   