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
