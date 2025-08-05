"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    if (x == 0 || y == 0) {
        return "Invalid";
    }
    return x + y;
}
const val = add(4, 5);
const val1 = add(0, 6);
console.log(val);
console.log(val1);
function makeName(firstName, lastName, middleName) {
    if (middleName)
        return firstName + "  " + middleName + " " + lastName;
    return firstName + " " + lastName;
}
const name1 = makeName("Siranjith", "R");
const name2 = makeName("John", "Dorsi", "Jr");
console.log(name1 + ", " + name2);
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function applyFunc(func, values) {
    const results = [];
    for (let i = 0; i < Math.min(func.length, values.length); i++) {
        const currentFunc = func[i];
        const args = values[i];
        if (currentFunc && args) {
            const result = currentFunc(args[0], args[1]);
            results.push(result);
        }
    }
    return results;
}
console.log(applyFunc([mul, div], [[1, 2], [8, 4]]));
function sum(str, ...numbers) {
    let ans = 0;
    for (let i = 0; i < numbers.length; i++) {
        const val = numbers[i];
        if (val) {
            ans += val;
        }
    }
    return ans;
}
console.log(sum("Tada", 1, 2, 4, 5));
//# sourceMappingURL=function.js.map