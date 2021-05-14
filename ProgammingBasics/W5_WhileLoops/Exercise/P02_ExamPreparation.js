function examPreparation(input) {
    let index = 0;
    let maxUnsatisfyingGrade = Number(input[index++]);
    let unsatisfyingGrades = 0;
    let gradesSum = 0;
    let problemsCount = 0;
    let lastProblem = undefined;

    let currentProblem = input[index++];

    while (currentProblem !== `Enough`) {
        let currentGrade = Number(input[index++]);

        if (currentGrade <= 4) {
            unsatisfyingGrades++;
            if (unsatisfyingGrades === maxUnsatisfyingGrade) {
                break;
            }
        }
        gradesSum += currentGrade;
        problemsCount++;
        lastProblem = currentProblem;
        currentProblem = input[index++];
    }
    if(unsatisfyingGrades === maxUnsatisfyingGrade){
        console.log(`You need a break, ${maxUnsatisfyingGrade} poor grades.`);
    } else{
        console.log(`Average score: ${(gradesSum/problemsCount).toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);