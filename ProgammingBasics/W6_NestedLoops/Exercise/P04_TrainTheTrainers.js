function trainTheTrainers(input) {

    let index = 0;
    let n = Number(input[index]);
    index++
    let line = input[index];


    let allGradesSum = 0;
    let countPresentations = 0;
    while (line !== "Finish") {
        let presentation = line;
        countPresentations++;

        let gradeSum = 0;
        let averageGrad = 0;
        for (let i = 0; i < n; i++) {
            let grade = Number(input[++index]);
            gradeSum += grade;

        }
        averageGrad = gradeSum / n;
        allGradesSum += averageGrad;
        console.log(`${presentation} - ${averageGrad.toFixed(2)}.`);


        line = input[++index];
    }
    let final = allGradesSum / countPresentations;
    console.log(`Student's final assessment is ${final.toFixed(2)}.`);
}