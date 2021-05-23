
function count(text, searchedWord) {
    searchedWord = ` ${searchedWord} `;
    let indexOfSearched = text.indexOf(searchedWord);
    let count = 0;

    while (indexOfSearched !== -1) {
        count++;
        indexOfSearched = text.indexOf(searchedWord, indexOfSearched + 1);
    }
    if (text.startsWith(searchedWord.trim())) {
        count++;
    }
    if (text.endsWith(searchedWord.trim())) {
        count++;
    }
    console.log(count);

}

count("This is a word and it also is a sentence",
    "is");