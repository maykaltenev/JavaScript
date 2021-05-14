function petShop(input){
    let dogFood = Number(input[0]);
    let otherDogs = Number(input[1]);
    let foodForDogs = 2.5;
    let foodForOtherDogs = 4;

    let result = dogFood * foodForDogs + otherDogs * foodForOtherDogs;
    console.log(`${result} lv.`)
}
petShop(["5","4"]);