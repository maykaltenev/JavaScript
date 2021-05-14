function personalTitles(input){
    let years = Number(input[0]);
    let gender = input[1];

    if (gender == "m"){
        if(years >= 16){
            console.log("Mr.");
        } else{
            console.log("Master");
        }
    } else{
        if (years >= 16){
            console.log("Ms.");
        }else{
            console.log("Miss");
        }
    }
}