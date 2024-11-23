// Q-1
let num = [3, 5, 6, 7, 4];
const square = num.map((el) => el * el);
console.log(square);

let sum = square.reduce((sum, el) => sum + el);

let avg = sum / num.length;
console.log(avg);

// Q-2
let orgArr = [3, 5, 2, 6, 8];
let newArr = orgArr.map((el) => el + 5);
console.log(newArr);

// Q-3
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
let upper_strings = strings.map((string) => string.toUpperCase());
console.log(upper_strings);

// Q-4
function doubleAndReturnArgs(arr2, ...args) {
  let newArr = [...arr2, ...args.map((el) => el * 2)];
  return newArr;
}
console.log(doubleAndReturnArgs([2, 4], 6, 8, 10, 12));

// Q-5
function mergeObjects(obj1, obj2) {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
}
console.log(
  mergeObjects({ name: "Shivam", age: 21 }, { user: "shivam", pass: "abcd" })
);
