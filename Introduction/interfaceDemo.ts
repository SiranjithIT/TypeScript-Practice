// Programming structure/syntax that allows the computer to enforce certain properties on an object. Allow us to interact with more complex objects and understand what properties they have.

interface Person{
  name: string;
  age: number;
  height?: number;
  hello: () => void;
}

const person: Person = {
  name: "Siranjith R",
  age: 26,
  hello: function () {
    return this.name + ", say hello!"
  }
}

console.log(person)
console.log(person.hello())

interface Employee extends Person{
  employeeId: number;
}

const emp: Employee = {
  name: "Siranjith R",
  age: 26,
  hello: function () {
    return this.name + ", say hello!"
  },
  employeeId: 1
}
console.log(emp);

interface Employee1{
  employeeId: number;
}

interface Manager extends Person, Employee{
  managerId: number;
}