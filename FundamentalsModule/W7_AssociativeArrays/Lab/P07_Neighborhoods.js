function neighborhoods(input) {
    let map = new Map();
    let neighborhoods = input[0].split(", ");
    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }
    for (let i = 1; i < input.length; i++) {
        let current = input[i].split(" - ");
        let neighborhood = current[0];
        let person = current[1];
        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }
    let sorted = Array.from(map).sort((a, b) => {

        return b[1].length - a[1].length;
    });

    for (let neighborhood of sorted) {
        let neighborhoodName = neighborhood[0];
        let persons = neighborhood[1];
        console.log(`${neighborhoodName}: ${persons.length}`);
        for (let j = 0; j < persons.length; j++) {
            console.log(`--${persons[j]}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);