function pascalCases(text) {

    const isUppercase = (symbol) => {
        return symbol.toUpperCase() === symbol;
    };

    let words = '';

    let currentWord = text[0];
    for (let i = 1; i < text.length; i++) {
        if (isUppercase(text[i])) {
            words += `${currentWord}, `;
            currentWord = text[i];
        } else {
            currentWord += text[i];
        }
    }
    words += currentWord;
    console.log(words);

}
pascalCases("C:\Internal\training-internal\Template.pptx");