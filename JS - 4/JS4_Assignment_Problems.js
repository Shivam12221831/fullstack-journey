// 1.
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}
console.log(arr.slice());

// 2.
let number = 28743152;
let count = 0;
let copy = number;
while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(count);

// 3.
let number2 = 283152;
let sum = 0;
let copy2 = number2;
while (copy2 > 0) {
  let digit = copy2 % 10;
  sum += digit;
  copy2 = Math.floor(copy2 / 10);
}
console.log(`Sum of digits of number is ${sum}`);

// 4.
let fact_num = 6;
let fact = 1;
for (let i = fact_num; i >= 1; i--) {
  fact = fact * i;
}
console.log(`factorial of number ${fact_num} is ${fact}`);

// 5.
let post_arr = [23, 54, 67, 306, 45, 65, 26, 99];
let max = 0;
for (i of post_arr) {
  if (i > max) {
    max = i;
  }
}
console.log(`Maximum element of array is ${max}`);
