// // 1.
// let num = 40;
// if (num % 10 == 0) {
//   console.log("GOOD NUMBER");
// } else {
//   console.log("BAD NUMBER");
// }

// // 2.
// let name = prompt("Enter your name : ");
// let age = prompt("Enter your age : ");
// alert(`${name} is ${age} years old.`);

// // 3.
// let quarter = prompt("Enter the current quarter : ");
// // console.log(typeof quarter);
// switch (quarter) {
//   case "1":
//     console.log("January, February, March");
//     break;
//   case "2":
//     console.log("April, May, June");
//     break;
//   case "3":
//     console.log("July, August, September");
//     break;
//   case "4":
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("Invalid Input");
// }

// // 4.
// let str = prompt("Enter the string : ");
// if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
//   console.log("Golden string");
// } else {
//   console.log("Not a golden string");
// }

// // 5.
// let a = 99;
// let b = 39;
// let c = 59;
// if (a > b && a > c) {
//   console.log("Greatest number is", a);
// } else if (b > c && b > a) {
//   console.log("Greatest number is", b);
// } else {
//   console.log("Greatest number is", c);
// }

// 6.
let num1 = 323342;
let num2 = 4785232;
if (num1 % 10 === num2 % 10) {
  console.log("Last digit of numbers are same.");
} else {
  console.log("Not same");
}
