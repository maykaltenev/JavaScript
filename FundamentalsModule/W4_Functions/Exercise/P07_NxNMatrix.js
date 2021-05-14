function nxnMatrix(num) {

    let res = '';

    for (let index = 1; index <= num; index++) {
        res += num + " ";

    }
    for (let col = 1; col <= num; col++) {
        
        console.log(`${res}`);
    }
}

nxnMatrix('7');