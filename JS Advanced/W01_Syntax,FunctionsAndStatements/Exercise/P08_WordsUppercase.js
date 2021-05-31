function wordsToUpperCase(text) {
    let formattedWords = [];
    let words = text.split(/\W+/g);
    for (const word of words) {
        if (word !== '') {
            formattedWords.push(word.toUpperCase());
        }
    }
    console.log(formattedWords.join(', '));
}
wordsToUpperCase('Hi, how are you?');