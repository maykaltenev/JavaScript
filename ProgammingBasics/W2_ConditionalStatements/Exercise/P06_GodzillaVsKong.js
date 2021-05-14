function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let priceClothes = Number(input[2]);

    let priceDecor = 0.1 * budget;
    let totalCloths = 0;
    if (statist >= 150) {
        totalCloths = (statist * priceClothes) - ((statist * priceClothes) * 0.10);
    } else {
        totalCloths = statist * priceClothes;
    }

    let total = priceDecor + totalCloths;
    let result = 0;
    if (budget >= total) {
        result = budget - total;
        console.log(`Action!
        Wingard starts filming with ${result.toFixed(2)} leva left.`);
    } else {
        result = total - budget;
        console.log(`Not enough money!
        Wingard needs ${result.toFixed(2)} leva more.`)
    }
}
godzillaVsKong(["15437.62",
    "186",
    "57.99"]);