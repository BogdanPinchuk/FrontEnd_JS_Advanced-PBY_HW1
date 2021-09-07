/**
 * human creator
 * @param {*} name [all name or only first name]
 * @param {*} sex [male/female]
 * @param {*} age [age 18 - 120 years]
 */
function Human(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

/**
 * sorting arrays of Humans
 * @param {Array & Human} arrayHumans 
 * @returns sorted array
 */
function sortHuman(arrayHumans) {
    let temp = arrayHumans.slice();
    temp.sort((a, b) => a.age - b.age);
    return temp;
}

/**
 * reverse sorting arrays of Humans
 * @param {Array & Human} arrayHumans 
 * @returns sorted array
 */
function reverseHuman(arrayHumans) {
    let temp = sortHuman(arrayHumans);
    temp.reverse();
    return temp;
}

// testing
let array = [
new Human("Bogdan", "male", 29),
new Human("Natalia", "female", 15),
new Human("Alexander", "male", 20),
new Human("Olena", "female", 25),
];

console.log(`Before sort:`);
console.log(array);

// sorting
let array0 = sortHuman(array);

console.log(`After sort:`);
console.log(array0);

// reverse
let array1 = reverseHuman(array);

console.log(`After sort:`);
console.log(array1);
