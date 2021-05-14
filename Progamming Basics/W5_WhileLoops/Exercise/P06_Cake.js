function cake(input) {
    let index = 0;
    let cakeWidth = Number(input[index++]);
    let cakeHeight = Number(input[index++]);
    let pieces = cakeWidth * cakeHeight;
    let currentPiece = input[index++];
    while (currentPiece !== `STOP`) {
        pieces -= Number(currentPiece);
        if (pieces < 0) {
            break;
        }
        currentPiece = input[index++];
    }
    if (pieces <= 0) {
        console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
    } else {
        console.log(`${pieces} pieces are left.`);
    }
}