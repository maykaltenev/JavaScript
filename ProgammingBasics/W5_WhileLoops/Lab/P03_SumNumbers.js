function sunNumbers(input){
    let final = Number(input[0]);
    let sum =0;
    let index = 1;
    while(!(sum >=final)){
        let plus = Number(input[index]);
        sum += plus;

        index++;
    }
    console.log(sum);
}
sunNumbers(["100",
"10",
"20",
"30",
"40"]);