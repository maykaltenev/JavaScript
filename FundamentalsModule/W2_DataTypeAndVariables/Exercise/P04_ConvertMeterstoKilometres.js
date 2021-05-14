function convertMetersOfKilometers(input){
    let meters = Number(input);
    let result = meters / 1000;

    console.log(`${result.toFixed(2)}`);
}
convertMetersOfKilometers(1852);