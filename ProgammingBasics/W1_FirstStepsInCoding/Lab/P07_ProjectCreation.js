function projectCreation(input){

    let name = input[0];
    let number = Number(input[1]);
    let hours = 3;
    let result = number * hours;
    console.log(`The architect ${name} will need ${result} hours to complete ${number} project/s.`);
}
