let arr = [34, 45, 54, 65];
let students = ["Shivam", "Aman", "Vikas", "Vaibhav"];
console.log(students.length);
console.log(students[0][1]);
console.log(students[2].length);

let mixed_arr = ["Shivam", 21, 89.2];
console.log(mixed_arr[2]);

// empty array
let empArr = [];
console.log(empArr.length);

// Arrays are mutubale - you can update it any time
let fruits = ["mango", "apple", "litchi"];
fruits[0] = "banana";
console.log(fruits[0]);
fruits[10] = "papaya";
console.log(fruits[10]);

// Array Methods -
// 1. push() -> add to end
let capitals = ["Delhi", "Mumbai", "Chennai"];
let pushCapital = capitals.push("Kolkata");
// console.log(pushCapital);  ----> return value as length of the array
// o/p -> capitals = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata']

// 2. pop() -> delete from end & return it
let deletedCapital = capitals.pop();
console.log("Deleted capital after pop is", deletedCapital);
// o/p -> capitals = ['Delhi', 'Mumbai', 'Chennai']

// 3. Unshift() - add to start
let unshiftCapital = capitals.unshift("Kolkata");
// console.log(unshiftCapital);  ----> return value as length of the array
// o/p -> capitals = ['Kolkata', 'Delhi', 'Mumbai', 'Chennai']

// 4. shift() - delete from start & return it
let shiftDeletedCapital = capitals.shift();
console.log("Deleted capital after shift is", shiftDeletedCapital);

// practice question
// start state -> ["january", "july", "march", "august"]
// final state -> ["july", "june", "march", "august"]

let months = ["january", "july", "march", "august"];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");

// 5. indexOf() - return index of something
let cars = ["audi", "bmw", "mercedes", "maruti"];
console.log(cars.indexOf("bmw")); //   1
console.log(cars.indexOf("BMW")); //  -1

// 6. includes() - search for a value
// return type of this method is boolean - true/false
console.log(cars.includes("maruti")); // true
console.log(cars.includes("auddi")); // false

// 7. concat() - merge 2 arrays
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];
// sequence of writing the syntax matters the most
let mergedArr1 = primary.concat(secondary);
// o/p -> mergedArr1 = ['red', 'yellow', 'blue', 'orange', 'green', 'violet']
let mergedArr2 = secondary.concat(primary);
// o/p -> mergedArr2 = ['orange', 'green', 'violet', 'red', 'yellow', 'blue']

// 8. reverse() - reverse an array
// No new array created, changes will happen on the same array
let marksArr = [10, 20, 30, 40, 50];
marksArr.reverse();
// o/p -> marksArr = [50, 40, 30, 20, 10]

// 9. slice() - copies a portion of an array
// everything is same as strings
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));
console.log(colors.slice(9)); // index out of bound return an empty array as output

// 10. splice() - removes/replaces/add elements in place
// splice(start, deleteCount, item0, ....., itemN);
let carsArr = ["audi", "bmw", "xuv", "maruti"];
console.log(carsArr.splice(3)); // start index = 3  and default deleteCount = 1
// o/p -> carsArr = ["audi", "bmw", "xuv"]
carsArr.splice(0, 1);
// o/p -> carsArr = ["bmw", "xuv"]
carsArr.splice(0, 1, "toyota", "jaguar");
// o/p -> carsArr = ["toyota", "jaguar", "xuv"]

// 11. sort() - sorts an array
// this method only works on string and character arrays not on number arrays - b/c for numbers b/f sorting this method converts every element of array into string acc. to ascii then sort them, so this may create some problems
let chars = ["b", "a", "f", "t", "e"];
console.log(chars.sort());
// console.log(chars.slice());    o/p ->  ["a", "b", "e", "f", "t"]
// this method make changes on the original array

let marks = [100, 83, 34, 87, 67];
console.log(marks.sort());
// this will give wrong o/p
// marks = [100, 34, 67, 83, 87]

// practice question
// return the index of the "javascript" from the given array, if it was reversed
let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// lang.reverse();
// console.log(lang.indexOf("javascript"));
console.log(lang.reverse().indexOf("javascript"));

// Array References
// if we create an array like arr = [1, 2, 3] in this arr is called as refrence variable that store the address where all these elements are stored
// so whenever we compare two arrays, the o/p will be false eventhough they have same elements b/c we are comparing address not element and address are d/f for every array

let arr2 = ["a", "b", "c"];
let arr2Copy = arr2;
// here if we make any changes to arr2Copy then these changes will also shown on arr2 b/c arr2Copy and arr2 both are same b/c they are pointing towards same memory address
arr2Copy.push("d");
// arr2Copy = ['a', 'b', 'c', 'd']
// arr2 = ['a', 'b', 'c', 'd']
arr2.pop();
// arr2Copy = ['a', 'b', 'c']
// arr2 = ['a', 'b', 'c']

// Constant array
const arr3 = [1, 2, 3];
// arr3 = [3, 4, 5];       -> this will give an array b/c we cann't asign new memory addresses to a constant array
// but we can apply all methods to array to manipulate its elements
arr3.push(4);
arr3.shift();

// Nested Array
let nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(nestedArr[0]);
console.log(nestedArr[1][0]);
console.log(nestedArr[2][2]); // o/p -> undefined

// Practice question
let ticTacToe = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];
console.log(ticTacToe.slice());
