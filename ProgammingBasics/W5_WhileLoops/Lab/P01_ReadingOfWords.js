function readingOfWords(input){
    let index = 0;
    while(true){
        let string = input[index];
        index++;
        if(string == "Stop"){
            break;
        } else{
            console.log(string);
        }
    }
}