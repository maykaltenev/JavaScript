function cinemaTickets(input) {

    let totalTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let studentTickets = 0;
    let i = 0;
    let inputLine = input[i++];
    while (inputLine != "Finish") {
        let movieName = inputLine;
        let ticketsCount = Number(input[i++]);
        let availableTickets = ticketsCount;

        let ticketType = input[i++];
        while (ticketType != "End") {
            switch (ticketType) {
                case "student":
                    studentTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    break;
            }

            availableTickets--;


            if (availableTickets == 0) {
                break;
            }
            ticketType = input[i++];
        }
        let boughtTickets = ticketsCount - availableTickets;
        let percent = (boughtTickets / ticketsCount) * 100;

        console.log(`${movieName} - ${percent.toFixed(2)}% full.`);


        inputLine = input[i++];

    }

    let total = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${total}`);
    console.log(`${(((studentTickets / total) * 100).toFixed(2))}% student tickets.`);
    console.log(`${(((standardTickets / total) * 100).toFixed(2))}% standard tickets.`);
    console.log(`${(((kidTickets / total) * 100).toFixed(2))}% kids tickets.`);

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);