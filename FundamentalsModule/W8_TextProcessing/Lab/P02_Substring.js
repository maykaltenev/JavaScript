function substring(text, startIndex, count) {

    startIndex = Number(startIndex);
    count = Number(count);
    return text.substring(startIndex, startIndex +count);
}
console.log(substring('Asentence', 1, 8))
