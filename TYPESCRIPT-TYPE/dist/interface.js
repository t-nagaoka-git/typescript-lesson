"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: 'Quill',
    nickName: 'Quilla',
};
class Developer {
    constructor(age, experience, initName) {
        this.age = age;
        this.experience = experience;
        this.initName = initName;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    },
};
const user = new Developer(38, 3, 'Quill');
if (user.name) {
    user.name.toUpperCase();
}
console.log(user.name);
