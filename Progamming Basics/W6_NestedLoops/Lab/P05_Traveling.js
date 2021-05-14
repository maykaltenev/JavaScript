function traveling(input){

    let index = 0;
    let destination = input[index];
    index++
    let minimum = Number(input[index]);
    index++;
    while(destination !== "End"){

       while(!(minimum <= 0)){
           let sum = Number(input[index]);
           index++;
           minimum -= sum;
       }
       console.log(`Going to ${destination}!`);
       destination = input[index];
       index++;
       minimum = Number(input[index]);
       index++;
    }

}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);