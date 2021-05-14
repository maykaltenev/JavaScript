function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    let bestScore = Number.MIN_SAFE_INTEGER;
    let bestPlayer = "";
    let isThereHatTrick = false;
    while (command !== 'END') {
        let name = command;
        index++;
        let goals = Number(input[index]);

        if (goals > bestScore) {
            bestScore = goals;
            bestPlayer = name;
            if (goals >= 3) {
                isThereHatTrick = true;
            }
            if(goals >= 10){
                break;
            }
        }
        index++;
        command = input[index];
    }

    console.log(`${bestPlayer} is the best player!`);
    if (isThereHatTrick) {
        console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestScore} goals.`);
    }

}

bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"]);