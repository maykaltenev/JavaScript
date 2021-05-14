function makeADictionary(input) {
    let dictionary = {};
    for (let i = 0; i < input.length; i++) {
        let el = JSON.parse(input[i]);
        let entry = Object.entries(el)[0];

        dictionary[entry[0]] = entry[1];

    }
    let sortedDictionary = {};
    for (const key of Object.keys(dictionary).sort((a, b) => a.localeCompare(b))) {
        sortedDictionary[key] = dictionary[key];

    }
    for (const term in sortedDictionary) {
        if (sortedDictionary.hasOwnProperty(term)) {
            const definition = sortedDictionary[term];
            console.log(`Term: ${term} => Definition: ${definition}`);
        }

    }
}
