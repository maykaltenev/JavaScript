function numbersDevisableBy9(input){

    min = Number(input[0]);
    max = Number(input[1]);
    let sum = 0;
    let output = "";
    for(let i = min; i <= max; i++){
        if(i % 9 ===0){
            sum += i;
            output += i + " ";
        }
    }
    console.log(sum);
    console.log(output);
}