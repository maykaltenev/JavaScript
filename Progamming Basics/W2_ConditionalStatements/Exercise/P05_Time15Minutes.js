function time15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMin = hours * 60 + minutes;
    let totalMinAfter = totalMin + 15;

    let finalHours = Math.floor(totalMinAfter / 60);

    if (finalHours > 23) {
        finalHours = 0;
      
    }
    let finalMin = totalMinAfter % 60;
    if (finalMin < 10) {
        console.log(`${finalHours}:0${finalMin}`);
    } else {
        console.log(`${finalHours}:${finalMin}`);
    }
}

time15Minutes(["23", "59"]);