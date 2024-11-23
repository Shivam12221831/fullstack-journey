// Array Methods - foreach, map, filter, some, every, reduce

// -> foreach()
let arr = [1, 2, 3, 4, 5];

// let print = function (el) {
//   console.log(el);
// };
// arr.forEach(print);

// arr.forEach(function (el) {
//   console.log(el);
// });

arr.forEach((el) => {
  console.log(el);
});

let arr2 = [
  {
    name: "Shivam",
    marks: 95,
  },
  {
    name: "Badal",
    marks: 97,
  },
  {
    name: "Puneet",
    marks: 90,
  },
];
arr2.forEach((student) => {
  console.log(student.name);
});

// -> map()

// let newArr = arr.map(some funciton definition or name);
let arr3 = [
  {
    name: "Shivam",
    marks: 95,
  },
  {
    name: "Badal",
    marks: 97,
  },
  {
    name: "Puneet",
    marks: 90,
  },
];
let gpa_arr = arr3.map((el) => {
  return el.marks / 10;
});
console.log(gpa_arr);

// -> filter()                    // return type bool

// let newArr = arr.filter(some function definition or name);
let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even_nums = nums.filter((num) => num % 2 == 0); // even->true odd->false
console.log(even_nums);

// -> every()            // its is like logical AND operator
// Returns true if every element of array give true for some function. Else returns false
// arr.every(some fucntion definition or name);

console.log([1, 2, 3, 4].every((el) => el % 2 == 0));
console.log([3, 6].every((el) => el % 3 == 0));

// -> some()             // its is like logical OR operator
// Returns true if some elements of array give true for some function. Else returns false
// arr.some(some fucntion definition or name);

console.log([1, 2, 3, 4].some((el) => el % 2 == 0));
console.log([2, 5].some((el) => el % 3 == 0));

// -> reduce()
// Reduces the array to a single value
// arr.reduce(reducer function with 2 variables for (accumulator, element));

let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.reduce((res, el) => res + el));

// Q- Finding in Maximum in an array
let nums2 = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
let result = nums2.reduce((max, el) => {
  if (el > max) {
    max = el;
  }
  return max;
});
console.log(result);

// Practice Q- Check if all numbers in our array are multiple of 10 or not
let nums3 = [300, 50, 6, 80];
console.log(nums3.every((el) => el % 10 == 0));

// Practice Q- Create a function to find the min number in an array.
let nums4 = [300, 50, 6, 80];
let minimum_num = nums4.reduce((min, el) => {
  if (el < min) {
    return el;
  } else {
    return min;
  }
});
console.log(minimum_num);

// -> Default Parameters
// Giving a default value to the arguments
// function func(a, b=2){ // do something }
function sum(a, b = 3) {
  // you always define default parameters at the last
  return a + b;
}
console.log(sum(2)); // you can leave to give argument value for default parameter
console.log(sum(5, 5));

// -> Spread
// Expands an iterable into multiple values
// function func(...arr){
//      do something
// }
console.log("Apnacollege");
console.log(..."Apnacollege");
let arr5 = [2, 7, 8, 6, 4];
console.log(Math.max(...arr5));

// Spread with array literals
let arr6 = [1, 2, 3, 4, 5];
let newArr6 = [...arr6];
newArr6.unshift(0);
console.log(newArr6);
let chars = [..."Hello"];
console.log(chars);
let odd = [1, 3, 5, 7];
let even = [2, 4, 6, 8];
let nums_all = [...even, ...odd];
console.log(nums_all);

// Spread with object literals
const data = {
  email: "ironman@gmail.com",
  password: "abcd",
};
const datacopy = { ...data, id: 101, country: "USA" };
console.log(datacopy);

let arr7 = [1, 2, 3, 4, 5];
let obj1 = { ...arr7 }; // In case of arr to obj or string to obj keys for obj is filled by the index of the respective elements
console.log(obj1);

let obj2 = { ..."Hello" };
console.log(obj2);

// -> Rest
// Allows a function to take an indefinite number of arguments and bundle them in an array
// function sum(...args){
//      return args.reduce((add, el) => add + el);
// }

function sum(...args) {
  return args.reduce((sum, el) => sum + el);
}
console.log(sum(2, 4, 76, 43));

function min_num(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}
console.log(min_num("hello", 45, 65, 54, 3, 76, 87));
console.log(min_num(23, 45, 67, 33, 87, 32, 76)); // here 23 is printed as msg and rest are args for min_num

// -> Destructuring
// Storing values of array into multiple variables

let names = ["tony", "thor", "steve", "hawkeye", "widow", "bruce"];
// let winner = names[0];
// let runnerup = name[1];
let [winner, runnerup, ...others] = names;
console.log(winner);
console.log(runnerup);
console.log(others);

// Destructuring for object literals
const student_info = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english", "math", "science", "social studies"],
  username: "karan@gmail.com",
  password: "abcd",
  city: "Pune",
};
let { username, password, city = "Mumbai" } = student_info; // Pune is print in output not mumbai b/c if it is defined in obj then it has higher priority
console.log(username, password, city);
let {
  username: user,
  password: secret,
  city: location = "Mumbai",
} = student_info;
console.log(user, secret, location);
