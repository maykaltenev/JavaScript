function factorial(input){
    let f = Number(input[0]);
    let result = 1;
    for(let i = 2; i <= f; i++){
        result *= i;

    }
    console.log(result);
}