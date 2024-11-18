const student = {
  name: "Shradha",
  age: 25,
  marks: 89.5,
};
// there no fixed index for properties of object literals unlike arrays

let student2 = ["sharadha", 25, 89.5];

let item = {
  price: 100.99,
  discount: 50,
  colors: ["red", "pink"],
};
console.log(item);

// Create Thread/Twitter Post
let post = {
  username: "@shivamchaudhary",
  content: "This is my #firstPost",
  likes: 150,
  reposts: 5,
  tags: ["@puneetKumar", "@dynamoprisu"],
};
console.log(`Object for an insta post is : `);
console.log(post);

// Get Values from any object literal
console.log("Methods for get value from object literals");
// M #1
console.log("Method 1 : ");
console.log(post["content"]);
console.log(post["tags"]);

// M #2
console.log("Method 2 : ");
console.log(post.username);
console.log(post.likes);

// Conversion of key into string while defined in object literals
const obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
};
// these keywords used in obj. literal don't going make any problem b/c these key are converted into string.

// Add / Update values
student.marks = [67, 87, 45];
student.gender = "Male";
console.log(student);

// Delete key:value pair
console.log(delete student.age);
console.log(student);

// Object of objects
const classInfo = {
  aman: {
    grade: "A+",
    city: "Delhi",
  },
  sharadha: {
    grade: "O",
    city: "Pune",
  },
  karan: {
    grade: "D",
    city: "Mumbai",
  },
};
console.log(classInfo);
console.log(classInfo.sharadha.grade);

// Array of objects

const newClassInfo = [
  {
    name: "aman",
    grade: "A+",
    city: "Delhi",
  },
  {
    name: "sharadha",
    grade: "O",
    city: "Pune",
  },
  {
    name: "karan",
    grade: "D",
    city: "Mumbai",
  },
];
console.log(newClassInfo[2]);
console.log(newClassInfo[1].name);

// Math object - it is an predefined obj in Javascript to solve mathematics problems
// property -
console.log(Math.PI);
console.log(Math.E);
// Methods -
console.log(Math.abs(-4));
console.log(Math.pow(4, 3));
console.log(Math.floor(5.99999));
console.log(Math.floor(-5.6));
console.log(Math.ceil(9.45));
console.log(Math.floor(Math.random()));
// Math.random() gives random value from 0 to 1 excluding 1.

// Practice Question
// 1. Generate random integer from 1 to 100;
let random01 = Math.floor(Math.random() * 100) + 1;
console.log(random01);

// 2. Generate random number from 21 to 25;
let random02 = Math.floor(Math.random() * 5) + 21;
console.log(random02);

// Guessing game -
let maxLimit = prompt("Plaese give range upper limit to start the game : ");
let randomNumber = Math.floor(Math.random() * maxLimit) + 1;
let guess = prompt("Now, Enter your guess : ");
while (true) {
  if (guess == "quit") {
    console.log("Quitting the game");
    break;
  }

  if (guess == randomNumber) {
    console.log(`Congrats! You guess the number right -> ${randomNumber}`);
    break;
  } else if (guess > randomNumber && guess != "quit") {
    guess = prompt(
      "HINT : Guess some small... Try Again! or write 'quit' to quit the game"
    );
  } else if (guess < randomNumber && guess != "quit") {
    guess = prompt(
      "HINT : Guess some large... Try Again! or write 'quit' to quit the game"
    );
  } else {
    console.log("Invalid input");
  }
}
