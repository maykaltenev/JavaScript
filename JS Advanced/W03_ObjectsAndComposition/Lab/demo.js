const myAssocArray = {

    'first': 5,
    'second': 10,
    'third': 15
};

const keys = Object.keys(myAssocArray);
console.log(keys);

for (const key in myAssocArray) {
    console.log(key);
}

const values = Object.values(myAssocArray);

for (let value of values) {
    console.log(value);
}
const entries = Object.entries(myAssocArray);

for (let [key, value] of entries) {
    console.log('key', key);
    console.log('values', value);
}

const myObj = {
    firstName: 'Peter',
    lastName: 'Johnson',
    sayHi() {
        return 'Hi!';
    },
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(myObj.fullName());

const sayHi = myObj.sayHi;
console.log(sayHi());

function createReact(width, height) {
    const react = { width, height };

    react.getAREA = () => {
        return react.width * react.height;
    };

    return react;
}