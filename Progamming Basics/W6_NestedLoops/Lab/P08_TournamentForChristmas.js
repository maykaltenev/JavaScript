function tournamentForChristmas(input) {
    let index = 0;
    let day = Number(input[index]);
    index++;

    let sumMoney = 0;
    let totalWin = 0;
    let totalLose = 0;
    for (let i = 0; i < day; i++) {
        let command = input[index];
        index++
        let tempMoney = 0;
        let countWin = 0;
        let countLost = 0;
        while (command !== "Finish") {
            let typeSport = command;
            let score = input[index];
            index++;


            if (score == "win") {
                tempMoney += 20;
                countWin++
            } else {
                countLost++;
            }

            command = input[index];
            index++;
        }
        if (countWin > countLost) {
            tempMoney *= 1.10;
            totalWin++;
        } else {
            totalLose++;
        }
        sumMoney += tempMoney;
    }
    if (totalWin > totalLose) {
        sumMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${sumMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${sumMoney.toFixed(2)}`);
    }

}
tournamentForChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);