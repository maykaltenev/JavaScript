function volleyball(input){
    let typeOfYear = input[0];
    let holidays = Number(input[1]);
    let travel = Number(input[2]);

    let totalWeekend = 48;

    let weekendInSofia = totalWeekend - travel; //46
    let gamesInSofia = weekendInSofia*  3.0/4; //34.5
    let holidayGames = holidays * 2.0/3;

    let total = travel+gamesInSofia+holidayGames;

    if(typeOfYear == "leap"){
        total *= 1.15;
        console.log(`${(Math.abs(Math.floor(total)))}`);
    } else{
        console.log(`${(Math.abs(Math.floor(total)))}`);

    }
}
volleyball(["leap","5","2"]);