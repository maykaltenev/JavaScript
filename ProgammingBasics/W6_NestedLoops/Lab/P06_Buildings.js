function buildings(input) {


    for (let i = input[0]; i > 0; i--) {
        let result = "";
        for (let j = 0; j < input[1]; j++) {
            let letter;
            if (i == input[0]) {
                letter = "L";
            } else {
                if (i % 2 == 0) {
                    letter = "O";
                } else {
                    letter = "A";
                }
            }
            result += `${letter}${i}${j} `;
        }
        console.log(`${result}`);
    }
}
buildings(["9", "5"]);