function signCheck(numOne, numTwo, numThree){

    let result = "";
    if (numOne >= 0 && numTwo >= 0 && numThree >= 0){
        result = 'Positive';
    } else if(numOne >= 0 && numTwo < 0 && numThree < 0){
        result = 'Positive';
    } else if(numOne < 0 && numTwo < 0 && numThree >= 0){
        result = 'Positive';
    } else if(numOne < 0 && numTwo >= 0 && numThree < 0){
        result = 'Positive';
    } else{
        result = 'Negative';
    }
    console.log(result);
}
signCheck(5,
    12,
    -15);