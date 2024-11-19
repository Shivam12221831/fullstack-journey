// Function definetion
function hello() {
  console.log("Hello");
}
// Function call
hello();

function printName() {
  console.log("Apna College");
  console.log("Shivam Singh");
}
printName();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
print1to5();

function isAdult() {
  let age = 23;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }
}
isAdult();

// Q-1 >>>>  Create a Function to roll a dice & always display the value of the dice(1 to 6).

function rollDice() {
  let rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
}
rollDice();
rollDice();
rollDice();
rollDice();

// Function with arguments
// function funcName(arg1, arg2){}

function printName1(name, age) {
  console.log(`${name}'s age is ${age}`);
}
printName1("Shivam", 21);
printName1("Puneet"); // o/p => Puneet's age is undefined

// Q-2 >>>>> Create aa Function that gives us the average of 3 numbers

function averageOfThree(a, b, c) {
  console.log("Average :", (a + b + c) / 3);
}
averageOfThree(5, 9, 4);

// Q-3 >>>> Create a Funciton that prints the multiplication table of a number

function table(num) {
  for (let i = 1; i <= 10; i++) {
    let multi = num * i;
    console.log(`${num} X ${i} = ${multi}`);
  }
}
table(43);

// Return
// Return -> return keyword is used to return some value from the function

function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Not Adult";
  }
}
console.log(isAdult(23));

// Q-4 >>>> Create a Function that returns the sum of nnumbers from 1 to n

function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(`Sum : ` + getSum(100));

// Q-5 >>>> Create a function that returns the concatenation of all strings in an array

function concatenate(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(concatenate(["Shivam ", "is a ", "Student ", "in ", "LPU"]));

// Scope
// Scope -> It determines the accessibility of variables, objects, and gunctions from different parts of the code.
// Funciton
// Block
// Lexical

// Function Scope -> Variables defines inside a funciton are not accessible from outside the funciton

let sum = 54; // Global Scope

function calSum(a, b) {
  let sum = a + b; // Function Scope
  console.log(sum); // o/p -> 5
}
calSum(2, 3);
console.log(sum); // o/p -> 54

// Block Scope -> Variables declared inside a {} block cannot be accessed from outside the block.
// let, const -> have block scope while var doesn't

for (let i = 0; i <= 2; i++) {
  console.log(i); // print i value from 0 to 2
}
// console.log(i);    // throws an error i is not defined

// Lexical Scope -> A variable defined outside a function can be accessible inside another funtion defined after the variable declaration
// The opposite is Not true.

function outerFunc() {
  let x = 5;
  let y = 6;
  function innerFunc() {
    // innerFunc has function scope
    let a = 10;
    console.log(x);
    console.log(y);
  }
  // console.log(a);   it will throw an error;
  innerFunc();
}
outerFunc();

/////////
let greet = "hello"; // global scope

function changeGreet() {
  let greet = "namaste"; // function scope
  console.log(greet);

  function innerGreet() {
    console.log(greet); // lexical scope
  }

  innerGreet();
}
console.log(greet);
changeGreet();

// Function expression or nameless function
const multi = function (a, b) {
  return a * b;
};
console.log(multi(5, 2));

// Higher order functions ->
// A function that does both or one:
// takes one or multiple functions as arguments
// return a function

function multiGreet(func, count) {
  // higher order function
  for (let i = 1; i <= count; i++) {
    func();
  }
}
let greet2 = function () {
  console.log("hello");
};
multiGreet(greet2, 5);

// multiGreet(function() {console.log("namaste")}, 1000);

// -> Methods
// Actions that can be performed on an object

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};
console.log(calculator.add(2, 6));
console.log(calculator.sub(2, 6));
console.log(calculator.mul(2, 6));
