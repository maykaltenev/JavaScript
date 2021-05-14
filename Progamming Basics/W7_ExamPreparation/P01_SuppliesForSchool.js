function suppliesForSchool(input){
    let pen = 5.8;
    let markers = 7.2;
    let cleaner = 1.2;

    let amountPens = Number(input[0]);
    let amountMarkers = Number(input[1]);
    let literCleaner = Number(input[2]);
    let discount = Number(input[3]);

    let pricePen = amountPens * pen;
    let priceMarkers = amountMarkers * markers;
    let priceCleaner = cleaner * literCleaner;

    let price = pricePen + priceMarkers + priceCleaner;
    let totalDiscount = price - (price * discount/ 100);
    console.log(totalDiscount.toFixed(3));
}
suppliesForSchool(["2",
"3",
"2.5",
"25"]);
