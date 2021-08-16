//console.log
const number = 10;

function addTwoNumbers(a, b) {
    return a + b;
}

function multiplyByTwo(n) {
    return n * 2;
}

console.log( (multiplyByTwo(addTwoNumbers(1, 3))) );
//=> 8


//console.table
const family = {
    mother: {
        firstName: "Susan",
        lastName: "Doyle",
        age: 32
    },
    father: {
        firstName: "John",
        lastName: "Doyle",
        age: 33
    },
    daughter: {
        firstName: "Lily",
        lastName: "Doyle",
        age: 5
    },
    son: {
        firstName: "Mike",
        lastName: "Doyle",
        age: 8
    }
}

console.table(family);