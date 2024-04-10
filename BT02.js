"use strict";
class Person {
    constructor(age, name, address) {
        this.age = age;
        this.name = name;
        this.address = address;
    }
}
function validatePerson(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    const { name, age, address } = obj;
    console.log(obj);
    if (typeof name !== 'string' || typeof age !== 'number' || typeof address !== 'object') {
        console.log(1);
        return false;
    }
    return true;
}
let obj = {
    name: "nhất",
    age: 19,
    address: {
        add: "hải dương"
    },
};
console.log(validatePerson(obj));
