function YardGreening(input){
    let price = 7.61;
    let discount = 0.18;
    let size = Number(input[0]);

    let totalPrize = price * size;
    let totalDiscount = discount * totalPrize;
    let afterDiscount = totalPrize-totalDiscount;
    console.log(`The final price is: ${afterDiscount} lv.`);
    console.log(`The discount is: ${totalDiscount} lv.`);
} 
YardGreening(["550"]);