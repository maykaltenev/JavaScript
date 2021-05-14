function searchNumbers(sequence, commands) {
    let [count, deleteCount, num] = commands;
    let slicedElements = sequence.slice(0, count);
    slicedElements.splice(0, deleteCount);

    let filteredNum = slicedElements.filter(x => x == num);

    return `Number ${num} occurs ${filteredNum.length} times.`

}

