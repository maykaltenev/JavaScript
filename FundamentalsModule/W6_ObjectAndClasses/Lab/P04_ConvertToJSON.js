function covertToJSON(name,lastName,hairColor){
    let obj = {
        name,
        lastName,
        hairColor
    }
    return JSON.stringify(obj);
}