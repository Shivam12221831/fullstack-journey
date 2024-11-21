// Index
// This
// Try & Catch
// Arrow function
// Implicit Retrun of arrow function
// Set Timeout function
// Set Interval Function
// ** this with arrow function 



// -> This
// This Keyword refers to an object that is executing the current piece of code

const student = {
  name: "shradha",
  age: 23,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
  },
};
student.getAvg();

// -> Try & Catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

try {
  console.log(a);
} catch (err) {
  console.log("Variable a doesn't find");
  //   console.log(err);
}

// -> Arrow Function
// const func = (arg1, arg2, ..) => {function definition}

// const func = arg1 => { function definition }   // this is also a correct syntax in case of single argument

const sum = (a, b) => {
  console.log(a + b);
};
sum(5, 6);

const pow = (a, b) => {
  return a ** b;
};
console.log(pow(3, 5));

// Implicit return in arrow function
// Implicit - automatic/obious
// const func = (arg1, arg2, ..) => (value);

const mul = (a, b, c) => a * b * c;
console.log(mul(4, 2, 5));

// -> Set Timeout Function
// setTimeout(function, timeout)
//               ^         ^
//            callback    time
//            function

console.log("Hi, there!");
setTimeout(() => {
  console.log("Apna College");
}, 5000);
console.log("Welcome to ");

// -> Set Interval Function
// setInterval(function, timeInterval)
// in set interval, callback function will run infinitely after every period of time that is given in time interval

// setInterval(() => {
//   console.log("Hello World!");
// }, 3000);

// to stop o/p of setInterval, first we need to know that this funciton return an id. So store that in a variable and call clearInterval(id);

// let id = setInterval(() => {
//   console.log("LPU!");
// }, 2000);
// clearInterval(id);

// -> this with arrow function
// this in normal function have scope defined as calling object
// but in arrow function this scope is defined as lexical scope

const student2 = {
  name: "aman",
  marks: 95,
  prop: this, // global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this); // parent's scope -> window
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // window
    }, 2000);
  },
};
student2.getName();
student2.getMarks();
student2.getInfo1();
student2.getInfo2();

// Q-> Write an arrow function that retruns the square of a number 'n'

const sqr = (n) => n * n;
console.log(sqr(15));

// Q-> Write a function that prints "Hello World" 5 times at intervals of 2s each.
let id2 = setInterval(() => {
  console.log("Hello World!");
}, 2000);

setTimeout(() => {
  clearInterval(id2);
}, 11000);
