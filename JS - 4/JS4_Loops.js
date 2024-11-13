// For loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// print all odd numbers (1 to 15)
// for (let i = 1; i <= 15; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}

// print all oeven numbers (1 to 10)
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// print the multiplication table of a number
let n = prompt("Enter the number : ");
console.log("Multiplication table of", n);
for (let i = 1; i <= 10; i++) {
  console.log(n, "X", i, "=", n * i);
}

// Nested loop
for (let i = 1; i <= 3; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

// while loop
let i = 5;
console.log("While loop");
while (i >= 1) {
  console.log(i);
  i--;
}

// Practice question - Guess fav. movie
const favMovie = "Avatar";
// while (1) {
//   let guessedMovie = prompt("Guess the movie name : ");
//   if (guessedMovie == favMovie) {
//     console.log(`Your guess for movie is right ${favMovie}`);
//     break;
//   } else {
//     console.log(`You guess for movie is wrong. Try Again!`);
//   }
// }
let guessedMovie = prompt("Guess the movie name : ");
while (guessedMovie != favMovie && guessedMovie != "quit") {
  //   console.log("Wrong guess. Try again!");
  guessedMovie = prompt(
    "Wrong guess. please try again or Write 'quit' to Quit"
  );
}

if (guessedMovie == favMovie) {
  console.log("Congrats! You guessed my fav. Movie.");
}

// Loops with Arrays
let fruits = ["Mango", "Apple", "Banana", "Litchi", "Orange"];

for (let i = 0; i < fruits.length; i += 2) {
  console.log(i, fruits[i]);
}

// Nested loop for nested array

let student = [
  ["aman", 95],
  ["shradha", 67],
  ["karan", 100],
];

for (let i = 0; i < student.length; i++) {
  console.log(`info of student #${i + 1}`);
  for (let j = 0; j < student[i].length; j++) {
    console.log(student[i][j]);
  }
}

// for of loop
// for(element of collection){
// do something
// }

let fruits02 = ["mango", "apple", "banana", "orange", "litchi"];
for (fruit of fruits) {
  console.log(fruit);
}

for (char of "Apnacollege") {
  console.log(char);
}
