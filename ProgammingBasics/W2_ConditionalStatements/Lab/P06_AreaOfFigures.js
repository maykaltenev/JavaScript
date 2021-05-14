function areaOfFigure(input){
    let figure = input[0];
    let result = 0;
    if(figure === "square"){
        let size = Number(input[1]);
        result =  size * size;
    } else if(figure === "rectangle"){
        let sideА = Number(input[1]);
        let sideB = Number(input[2]);
        result = sideА * sideB;
    } else if(figure === 'circle'){
        let r = Number(input[1]);
        result = Math.PI * (r*r);
    } else if(figure ==="triangle"){
        let side = Number(input[1]);
        let hight = Number(input[2]);
        result = (side * hight) / 2;
    }
    console.log(result.toFixed(3));
}
areaOfFigure(["square", "5"]);
areaOfFigure(["rectangle",
"7",
"2.5"]);
areaOfFigure(["circle", "6"]);

