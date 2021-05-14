function oldLibrary(input){

    let book = input[0];
    let counter = 0;
    let index = 1;
    let command = input[index];
    let bookIsFound = false;

    while(command !== "No More Books" ){
        let nextBook = command;
        counter++;
        if (nextBook  === book) {
            console.log(`You checked ${counter - 1} books and found it.`);
            bookIsFound = true;
            break;
        }

        index ++;
        command = input[index];
    }
    if(!bookIsFound){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }
}
oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"`Tripple`",
"Stella",
"The Matrix",
"Bourne"]);