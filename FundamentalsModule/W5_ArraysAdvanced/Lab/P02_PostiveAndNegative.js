function positiveAndNegative(numbers){

    let output = [];
    for(const num of numbers){
        if(num < 0){
            output.unshift(num);
        } else{
            output.push(num);
        }
    }
    return output.join('\n');
}