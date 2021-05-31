function squareOfStars(num) {

    let myNum = Number(num);
 
    for (let i = 1; i <= myNum; i++) {
        let line = '';
        for (let k = 1; k <= myNum; k++) {
            line += '* ';
        }
        console.log(line);
    }

}
squareOfStars(3);
squareOfStars(4);
squareOfStars(5);