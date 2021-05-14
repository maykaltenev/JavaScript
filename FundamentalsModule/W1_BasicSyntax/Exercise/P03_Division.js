function division(input){

    let n = Number(input);
//2, 3, 6, 7, and 10. Y
    if(n % 10 == 0){
        console.log("The number is divisible by 10");
        return;
    } else if(n % 7 == 0){
        console.log("The number is divisible by 7");
        return;
    } else if(n % 6 == 0){
        console.log("The number is divisible by 6");
        return;
    } else if(n % 3 == 0){
        console.log("The number is divisible by 3");
        return;
    }else if(n % 2== 0){
        console.log("The number is divisible by 2");
    } else{
        console.log("Not divisible");
    }
}