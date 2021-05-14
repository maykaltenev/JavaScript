function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);
    let space = width * length * hight;
    let next = 3;
    let sum = 0;
    let command = input[next];

    while (command !== 'Done') {
        let box = Number(command);
        sum += box;
        if (space < sum) {
            let left = sum - space;
            console.log(`No more free space! You need ${left} Cubic meters more.`);
            break;
        } 
        command = input[++next];
    }
    if(command === 'Done'){
        console.log(`${space - sum} Cubic meters left.`);
    }

}