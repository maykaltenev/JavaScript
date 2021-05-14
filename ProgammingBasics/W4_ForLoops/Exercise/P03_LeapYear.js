function leapYear(input){
    let start = input[0];
    let end = input[1];


    for(let i = start; i <= end; i++){
        if(i % 4 == 0){
            console.log(i);
        }
    }
}
