function solve(area, vol, input) {

    const figures = JSON.parse(input);

    const result = figures.map(figure => ({
        area: area.call(figure),
        volume: vol.call(figure)
    }));

    return result;
}

const input = `[{"x":"1","y":"2","z":"10"},{"x": "7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]`;

console.log(solve(area, vol, input));