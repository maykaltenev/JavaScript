function phonebook(input) {
    let phonebook = {};
    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let phone = tokens[1];

        phonebook[name] = phone;
    }
    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

