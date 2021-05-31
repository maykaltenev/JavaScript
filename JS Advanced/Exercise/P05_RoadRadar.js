function roadRadar([speed, area]) {

    let allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (speed > allowedSpeeds[area]) {
        let speeding = speed - allowedSpeeds[area];
        consolelogSpeeding(speeding);
    }
    function logSpeeding(speeding) {
        if (speeding <= 20) {
            return 'speeding';
        } else if (speeding <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}