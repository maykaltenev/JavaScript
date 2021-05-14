function scholarship(input){

    let income = Number(input[0]);
    let averageNotes = Number(input[1]);
    let minimumWage = Number(input[2]);
    let socialScholarship = 0;
    let highScoreScholarship = 0;
    let isHighScoreScholarship = false;
    let isSocialScholarship = false;
    if(income <= minimumWage){
        socialScholarship += 0.35 * minimumWage;
        isSocialScholarship = true;
    }
    if(averageNotes >= 5.5){
        highScoreScholarship *= 25;
        isHighScoreScholarship = true;
    }
    if(isSocialScholarship && isHighScoreScholarship){
        if(socialScholarship > highScoreScholarship){
            console.log(`You get a Social scholarship ${socialScholarship} BGN`);
        }else{
            console.log(`You get a scholarship for excellent results ${highScoreScholarship}} BGN`);
        }
    } else if(isHighScoreScholarship){
        console.log(`You get a scholarship for excellent results ${highScoreScholarship}} BGN`);
    } else if(isSocialScholarship){
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else{
        console.log(`You cannot get a scholarship!`);
    }
}
scholarship(["480.00",
"4.60",
"450.00"]);