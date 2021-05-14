function meeting(input) {
    let calendar = {};
    for (let line of input) {
        let [day, name] = line.split(' ');
        if (calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            calendar[day] = name;
        }
    }
    for (const day in calendar) {
        console.log(`${day} -> ${calendar[day]}`);

    }
}
