function listOfNames(arr) {


    let result = arr
        .slice(0)
        .sort((a, b) => a.localeCompare(b))
        .map((name, index) => {
            let result = `${index + 1}.${name}`
            return result;
        })
    return result;


}
console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));