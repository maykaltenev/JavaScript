function AgencyProfit(input) {

    let index = 0;
    let agencyName = input[index];

    let grownUpTickets = Number(input[1]);
    let childTickets = Number(input[2]);
    let netGrownUpTicket = Number(input[3]);
    let serviceTax = Number(input[4]);

    let priceChild = netGrownUpTicket - (netGrownUpTicket * 0.70);
    let serviceTaxGrownUp = serviceTax + netGrownUpTicket;
    let serviceTaxKid = priceChild + serviceTax;
    let total = (childTickets * serviceTaxKid) + (grownUpTickets * serviceTaxGrownUp);
    let win = total - total * 0.8;
    console.log(`The profit of your agency from ${agencyName} tickets is ${win.toFixed(2)} lv.`);
}
AgencyProfit(["Moro",
    "15",
    "5",
    "120",
    "40"]);