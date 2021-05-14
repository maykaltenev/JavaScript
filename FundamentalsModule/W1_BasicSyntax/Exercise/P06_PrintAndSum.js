function printSum(start,end){

    let sum = 0;
    let all = "";
    for (let index = start; index <= end; index++) {
         all += index + " "; 
         sum += index;
    }
    console.log(all);
    console.log(`Sum: ${sum}`);
}
printSum(5,10);