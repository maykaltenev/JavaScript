function worldRecord(input){

    let worldRecordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecendFor1Meter = Number(input[2]);

    let time = distanceInMeters*timeInSecendFor1Meter;
    let addedTime = Math.floor(distanceInMeters/ 15);
    let resultAddedTime = addedTime * 12.5;
    let totalTime = time + resultAddedTime;

    let result = 0;
    if(totalTime < worldRecordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else{
        result = totalTime - worldRecordInSeconds;
        console.log(`No, he failed! He was ${result.toFixed(2)} seconds slower.`);
    }

}
worldRecord(["55555.67",
"3017",
"5.03"]);