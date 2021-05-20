function timeTravel(input) {
    let countries = {};

    input.forEach((line) => {
        let [country, town, currentPrice] = line.split(' > ');
        currentPrice = Number(currentPrice);

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
            countries[country][town] = currentPrice;
        } else {
            let countryObj = countries[country];

            if (!countryObj.hasOwnProperty(town)) {
                countryObj[town] = currentPrice;

            } else {
                let oldPrice = countryObj[town];
                if (oldPrice > currentPrice) {
                    countryObj[town] = currentPrice;
                }
            }
        }
    });

    let sortedCountries = Object.entries(countries)
        .sort(sortCountries);

    for (let [name, towns] of sortedCountries) {
        let sortedTowns = Object.entries(towns).sort(sortTowns);
        let output = `${name} -> `;
        for (let [townName, townsPrice] of sortedTowns) {
            output += `${townName} -> ${townsPrice} `;
        }
        output = output.trim();

        console.log(output);
    }

    function sortCountries(firstCountry, secondCountry) {
        let firstName = firstCountry[0];
        let secondName = secondCountry[0];

        return firstName.localeCompare(secondName);
    }
    function sortTowns(firstTown, secondTown) {

        let firstPrice = firstTown[1];
        let secondPrice = secondTown[1];

        return firstPrice - secondPrice;
    }
}