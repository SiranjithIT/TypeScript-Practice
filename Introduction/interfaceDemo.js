"use strict";
// Programming structure/syntax that allows the computer to enforce certain properties on an object. Allow us to interact with more complex objects and understand what properties they have.
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Siranjith R",
    age: 26,
    hello: function () {
        return this.name + ", say hello!";
    }
};
console.log(person);
console.log(person.hello());
const emp = {
    name: "Siranjith R",
    age: 26,
    hello: function () {
        return this.name + ", say hello!";
    },
    employeeId: 1
};
console.log(emp);
//# sourceMappingURL=interfaceDemo.js.map