function workingHours (input){
    let hours = Number(input[0]);
    let day = input[1];
    
    if(day == "Sunday"){
        console.log("closed");
    } else if (day == "Monday" && hours >= 10 && hours <= 18){
        console.log("open");
    }else if (day == "Tuesday" && hours >= 10 && hours <= 18){
        console.log("open");
    }else if (day == "Wednesday" && hours >= 10 && hours <= 18){
        console.log("open");
    }else if (day == "Thursday" && hours >= 10 && hours <= 18){
        console.log("open");
    }else if (day == "Friday" && hours >= 10 && hours <= 18){
        console.log("open");
    }else if (day == "Saturday" && hours >= 10 && hours <= 18){
        console.log("open");
    } else{
        console.log("closed")
    }
}