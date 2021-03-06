function cards(input) {

    let type = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }
    let power = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14

    }
    let players = {};

    for (const line of input) {
        let [name, cards] = line.split(": ");
        if (players.hasOwnProperty(name)) {
            players[name].push(...cards.split(", "))
        } else {
            players[name] = cards.split(', ');
        }
    }

    Object.keys(players)
        .forEach(name => {
            players[name] = new Set(players[name]);
            let cardSet = players[name];
            let total = 0;
            for (let card of cardSet) {
                card = card.split('');
                let cardType = card.pop();
                let cardPower = card.join('');
                let points = 0;
                if (isNaN(cardPower)) {
                    points = type[cardType] * power[cardPower];
                } else {
                    points = type[cardType] * Number(cardPower);
                }
                total += points;
            }
            players[name] = total;

        })
    return Object.keys(players).map( name =>`${name}: ${players[name]}`).join('\n');
}



