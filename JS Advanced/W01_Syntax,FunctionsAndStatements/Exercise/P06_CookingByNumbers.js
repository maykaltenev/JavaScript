function cookingByNumbers(num, op1, op2, op3, op4, op5) {


    num = applyOperation(num,op1);
    console.log(num);
    num = applyOperation(num,op2);
    console.log(num);
    num = applyOperation(num,op3);
    console.log(num);
    num = applyOperation(num,op4);
    console.log(num);
    num = applyOperation(num,op5);
    console.log(num);
    

    function applyOperation(num, op) {
        switch (op) {
            case 'chop': {
                num /= 2;
                break;
            }
            case 'dice': {
                num = Math.sqrt(num);
                break;
            }
            case 'spice': {
                num += 1;
                break;
            }
            case 'bake': {
                num *= 3;
                break;
            }
            case 'fillet': {
                num *= 0.8;
                break;
            }

        }
        return num;
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')