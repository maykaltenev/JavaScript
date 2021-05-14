function smallestNumber(x,y,z){

    let smallestNumber = Number.MAX_SAFE_INTEGER;

    for(const n of arguments){
        getSmaller(n);
    }
    function getSmaller(n){
        if(n < smallestNumber){
            smallestNumber = n;
        }
    }
    return smallestNumber;
}
