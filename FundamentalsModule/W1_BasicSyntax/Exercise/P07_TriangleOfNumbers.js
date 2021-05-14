function triangleOfNumbers(t) {


    for (let i = 1; i <= t; i++) {
        let eachLine = "";
        for (let j = 1; j <= i; j++) {
            eachLine += i + " ";

        }

        console.log(eachLine);


    }
}
let t = 5;
triangleOfNumbers(t)
