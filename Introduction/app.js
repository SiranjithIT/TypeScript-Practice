"use strict";
// Primitive types - number, string, boolean, undefined, null, void and never
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1; //0 , -1, Infinity, -Infinity, 3.3
let str = "Hello";
let str1 = `This is number: ${x}`;
let y = 4;
//y = "hello";
let a;
a = true; // or false
// null and undefined
let res = null; //Explicitly define something as empty or non-existent
let res1 = undefined; // Used as placeholder that means a variable has been declared but has not yet been assigned a value.
//===========================================================
//Array
let arr = [1, 2, 3, 4];
let strArr = ["hello", "how", "are you"];
//tuple
const coord = [1, 2, "3"];
const coord1 = [
    [1, 2],
    [3, 4]
];
//=========================================================
//Literal - Textual representation(notation) of a value as it is written in source code.
let direction;
direction = "east";
//Enum enables developers to establish a collection of named constants(enumerators), each linked with an integer value. They are treated as data types, and you can use them to create sets of constants for use with variables and properties.
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Description;
(function (Description) {
    Description["SmallText"] = "This is some sub text to the content.";
})(Description || (Description = {}));
let size = 0;
console.log(size);
//any - used typically when you're in a very complex situation and you're not able to predict what the type of the variables gonna be.
let b = 1;
//unknown - is a type-safe counterpart to the "any type". Provides a powerful way to handle values of uncertain types while maintaining type safety.
let c = 1;
if (typeof c == "number") {
    const result = c + 1;
}
else if (typeof c == "string") {
    const result = c.length;
}
const result = c + 1;
const processFeedback = (input) => {
    console.log(`Processing: ${input}`);
};
processFeedback(1);
processFeedback("Hello, World");
const processFeedback1 = (input) => {
    if (typeof input === "string") {
        console.log(`Processing text: ${input}`);
    }
    else if (typeof input === "number") {
        console.log(`Processing number: ${input}`);
    }
    else if (input instanceof Blob) {
        console.log(`Processing blob: ${input}`);
    }
    else {
        console.log(`Unsupported format...`);
    }
};
processFeedback1(1);
processFeedback1("Hello, World");
processFeedback1(new Blob());
processFeedback1([1, 2, 3]);
//? => if it is undefined it continues else it gives the value of the specified attribute. Checking and moving forward.
const arr1 = [{ name: "tim" }, { name: "joe" }];
const item = arr1.pop()?.name;
const arr2 = [[{ name: "" }]];
const item2 = arr2.pop()?.pop()?.name;
//! => tells the compiler to ignore the possibility of it being undefined. Forcing us to move forward.
const arr3 = [[{ name: "" }]];
const item3 = arr2.pop().pop().name;
//# sourceMappingURL=app.js.map