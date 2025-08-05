function add(x: number, y: number):number|string{
  if(x == 0 || y == 0){
    return "Invalid";
  }
  return x + y
}

const val: number|string = add(4, 5)
const val1: number|string = add(0, 6)
console.log(val)
console.log(val1)

function makeName(firstName: string, lastName: string, middleName?: string): string{
  if(middleName) return firstName + "  " + middleName + " " + lastName;
  return firstName + " " + lastName;
}

const name1: string = makeName("Siranjith", "R");
const name2: string = makeName("John", "Dorsi", "Jr")
console.log(name1 + ", " + name2)


function mul(x: number, y: number): number {
  return x * y;
}

function div(x: number, y: number): number {
  return x / y;
}

function applyFunc(
  func: ((a: number, b: number) => number)[], 
  values: [number, number][]
): number[] {
  const results = [] as number[];
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

function sum(str: string, ...numbers: number[]): number{
  let ans: number = 0
  for(let i = 0;i < numbers.length;i++){
    const val = numbers[i];
    if(val){
      ans += val;
    }
  }
  return ans;
}

console.log(sum("Tada", 1, 2, 4, 5))
