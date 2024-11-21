// Q-1
const avg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(avg([3, 5, 2, 6, 8]));

// Q-2

const isEven = (num) => {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Not Even");
  }
};
isEven(5);
isEven(74);

// Q-3
const object = {
  message: "Hello World!",
  logMessage() {
    console.log(this.message);
  },
};
setTimeout(object.logMessage, 1000); // o/p -> undefined

// Q-4
let length = 4;
function callback() {
  console.log(this.length);
}

const object2 = {
  length: 5,
  method(callback) {
    callback();
  },
};

object2.method(callback, 1, 2);
