function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let trashedHelm = lostFight / 2;
    let trashedSword = lostFight / 3;

    let neededMoney = 0;
    let shieldCount = 0;
    for (let i = 1; i <= lostFight; i++) {

        if (i % 2 == 0) {
            neededMoney += helmetPrice;
        }
        if (i % 3 == 0) {
            neededMoney += swordPrice;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            neededMoney += shieldPrice;
            shieldCount++;
        }
        if (shieldCount % 2 == 0 && shieldCount>0){
            neededMoney += armorPrice;
            shieldCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${neededMoney.toFixed(2)} aureus`);
}