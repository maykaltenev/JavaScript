function increaseSubsequence(numArr) {



    let result = numArr.reduce((acc, el) => {
        if (acc.length === 0 || acc[acc.length - 1] <= el) {
            acc.push(el);
        }
        return acc;
    }, [])
    return result;




}
console.log(increaseSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));

