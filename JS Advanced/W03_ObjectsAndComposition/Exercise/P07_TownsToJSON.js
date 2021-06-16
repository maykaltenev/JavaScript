function townsToJSON(inputArr) {
    let titles = serializeRows(inputArr[0]);
    let rows = inputArr
        .slice(1)
        .map(row => serializeRows(row).reduce(accumulator, {}));

    return JSON.stringify(rows);

    function parseNumber(x) {
        return isNaN(Number(x)) ? x : Number(Number(x).toFixed(2));
    }

    function accumulator(obj, el, i) {
        obj[titles[i]] = el;
        return obj;
    }
    function serializeRows(str) {
        return str
            .split(/\s*\|\s*/gim)
            .filter(x => x !== '')
            .map(x => parseNumber(x));
    }
}
console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));