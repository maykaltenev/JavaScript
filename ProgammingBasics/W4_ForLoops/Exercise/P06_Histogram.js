function histogram(input){
    let index =0;
    let n = Number(input[index]);
    index++;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 0; i <n; i++){
        let num = input[index];
        index++;
        if(num< 200){
            p1++;
            
        } else if(num >= 200 && num < 400){
            p2++;
        } else if(num >= 400 && num < 600){
            p3++;
        } else if(num >= 600 && num <800){
            p4++;
        } else{
            p5++;
        }
    
    }
    
    
    let p1Result= p1/n*100;
    let p2Result= p2/n*100;
    let p3Result= p3/n*100
    let p4Result= p4/n*100
    let p5Result= p5/n*100
    console.log(p1Result.toFixed(2)+"%"); 
    console.log(p2Result.toFixed(2)+"%"); 
    console.log(p3Result.toFixed(2)+"%"); 
    console.log(p4Result.toFixed(2)+"%"); 
    console.log(p5Result.toFixed(2)+"%"); 
 
}