function employees(input) {

    for (const str of input) {

        let obj = {
            name: str,
            id: str.length
        }

        console.log(`Name: ${obj.name} -- Personal Number: ${obj.id}`);

    }



}