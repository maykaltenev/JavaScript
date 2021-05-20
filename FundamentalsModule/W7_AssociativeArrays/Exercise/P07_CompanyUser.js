function companyUser(input) {
    let companies = {};
    for (const element of input) {
        let [company, id] = element.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    }
    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let element of sorted) {
        console.log(element[0]);
        let set = new Set(element[1]);
        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }
}
