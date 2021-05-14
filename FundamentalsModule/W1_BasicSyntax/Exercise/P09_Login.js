function login(input) {
    let index = 0;
    let username = input[index];

    let password = username.split('').reverse().join('');

    let counter = 0;
    index++;
    let currentPassword = input[index];
    while (password !== currentPassword && counter < 3) {
        counter++;



        console.log(`Incorrect password. Try again.`);

        index++;
        currentPassword = input[index];
    }
    if (currentPassword === password) {
        console.log(`User ${username} logged in.`);
    } else {
        console.log(`User ${username} blocked!`);
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);

console.log(`-------------------------`);
login(['momo', 'omom']);

console.log(`-------------------------`);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

console.log(`-------------------------`);
