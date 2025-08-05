// Primitive types - number, string, boolean, undefined, null, void and never

let x: number = 1;  //0 , -1, Infinity, -Infinity, 3.3
let str: string = "Hello";
let str1 = `This is number: ${x}`
let y = 4;
//y = "hello";
let a: boolean;
a = true // or false
// null and undefined
let res = null; //Explicitly define something as empty or non-existent
let res1 = undefined; // Used as placeholder that means a variable has been declared but has not yet been assigned a value.


//===========================================================
//Array
let arr: number[] = [1, 2, 3, 4];
let strArr: string[] = ["hello", "how", "are you"];

//tuple
const coord: [number, number, string] = [1, 2, "3"]
const coord1: [number, number][] = [
  [1, 2],
  [3, 4]
]

//=========================================================
//Literal - Textual representation(notation) of a value as it is written in source code.
let direction: "north" | "south" | "east" | "west";
direction = "east";
  
//Enum enables developers to establish a collection of named constants(enumerators), each linked with an integer value. They are treated as data types, and you can use them to create sets of constants for use with variables and properties.
enum Size{
  Small,     //small = 10 (following will have values incremented by one.)
  Medium,
  Large
}

enum Direction{
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

enum Description {
  SmallText = "This is some sub text to the content."
}

let size: Size = 0;
console.log(size)


//any - used typically when you're in a very complex situation and you're not able to predict what the type of the variables gonna be.
let b: any = 1;

//unknown - is a type-safe counterpart to the "any type". Provides a powerful way to handle values of uncertain types while maintaining type safety.

let c: unknown = 1;

if(typeof c == "number"){
  const result = c + 1;
} else if(typeof c == "string") {
  const result = c.length
}

const result = (c as number) + 1

const processFeedback = (input: any) =>{
  console.log(`Processing: ${input}`);
}

processFeedback(1);
processFeedback("Hello, World")

const processFeedback1 = (input: unknown) =>{
  if(typeof input === "string"){
    console.log(`Processing text: ${input}`);
  }else if(typeof input === "number"){
    console.log(`Processing number: ${input}`);
  }else if(input instanceof Blob){
    console.log(`Processing blob: ${input}`);
  }else{
    console.log(`Unsupported format...`);
  }
}

processFeedback1(1);
processFeedback1("Hello, World")
processFeedback1(new Blob())
processFeedback1([1, 2, 3])

//? => if it is undefined it continues else it gives the value of the specified attribute. Checking and moving forward.
const arr1 = [{name: "tim"}, {name: "joe"}]
const item = arr1.pop()?.name;
const arr2 = [[{name: ""}]]
const item2 = arr2.pop()?.pop()?.name;
//! => tells the compiler to ignore the possibility of it being undefined. Forcing us to move forward.
const arr3 = [[{name: ""}]]
const item3 = arr2.pop()!.pop()!.name;
