function salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);
    for (let i = 1; i <= n+1; i++) {
        let site =input[i];

        if (site == `Facebook`) {
            salary -= 150;
        }
        if (site == `Instagram`) {
            salary -= 100;
        }
        if (site == `Reddit`) {
            salary -= 50;
        }
        
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
    }
    if(salary!=0){
        console.log(salary);
    }
}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);