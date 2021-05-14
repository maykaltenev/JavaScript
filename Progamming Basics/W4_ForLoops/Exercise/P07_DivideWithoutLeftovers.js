function divideWithoutLeftover(input){
 
    let n = Number(input[0]);
    let p2 = 0.0;
    let p3 = 0.0;
    let p4 = 0.0;

    for(let i = 1; i < input.length ; i++){
        let number = Number(input[i]);
      
      

        if (number % 2 ==0){
            p2++;
        } 
        if (number % 3 ==0){
            p3++;
        } 
         if (number % 4 ==0){
            p4++;
        }
    }

    console.log(`${(p2/n *100).toFixed(2)}%`);
    console.log(`${(p3/n *100).toFixed(2)}%`);
    console.log(`${(p4/n *100).toFixed(2)}%`);
}