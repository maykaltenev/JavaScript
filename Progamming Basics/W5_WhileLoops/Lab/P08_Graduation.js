function graduation(input) {
    let name = input[0];
    let count = 1;
    let excluded = 0;
    let total = 0.0;


    while (count <= 12) {
        let grade = Number(input[count]);
        if (grade <= 4.00) {
            excluded++;
            if (excluded == 2) {
                break;
            }
            continue;
            
        }
        count++;
        total += grade;
    }

    if (count >= 12) {
        let result = 1.0 * total / 12;
        console.log(`${name} graduated. Average grade: ${result.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${count-1} grade`);
    }
}

    graduation(["Gosho", 
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);