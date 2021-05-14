function balls(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;
    
    let counterRed = 0;
    let counterOrange = 0;
    let counterYellow = 0;
    let counterWhite = 0;
    let counterOther = 0;
    let counterBlack = 0;
    let points = 0;
    for (let i = 0; i < n; i++) {
        let color = input[index];
        index++;
        switch (color) {
            case "red":
                counterRed++;
                points += 5;
                break;
            case "orange":
                counterOrange++
                points += 10;
                break;
            case "yellow":
                counterYellow++
                points += 15;
                break;
            case "white":
                counterWhite++
                points += 20;
                break;
            case "black":
                counterBlack++;
                points = Math.floor(points / 2);
                break;
            default:
                counterOther++;
                break;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Points from red balls: ${counterRed}`);
    console.log(`Points from orange balls: ${counterOrange}`);
    console.log(`Points from yellow balls: ${counterYellow}`);
    console.log(`Points from white balls: ${counterWhite}`);
    console.log(`Other colors picked: ${counterOther}`);
    console.log(`Divides from black balls: ${counterBlack}`);
}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"]);