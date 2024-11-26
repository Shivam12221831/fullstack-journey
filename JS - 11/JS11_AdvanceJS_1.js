// // ------> JS call stack
// // this is a data structure provided by every js file to have track of sequence of funtion calls
// // it follows LIFO - Last In First Out

// function hello() {
//   console.log("inside hello fn.");
// }
// function demo() {
//   console.log("calling hello function");
//   hello();
// }
// console.log("calling demo function");
// demo();
// console.log("All calls are done");
// o/p - calling demo function
//       calling hello function
//       inside hello fn.
//       All calls are done

// visualizing the call stack
function one() {
  return 1;
}
function two() {
  return one() + one();
}
function three() {
  let ans = two() + one();
  console.log(ans);
}
three(); // o/p - 3

// -----> Breakpoints
// you can use these as debugger.. If you want to see the execution or sequence of your function calls then you can use breakpoints
// to use breakpoints go to - Inspect -> Sources -> Breakpoints/Call stack

// ------> JS is Single threaded
// JS execute code line by line(synchronously), if any line want to perform some i/p and o/p operation then JS wait to complete it and then move to next line for execution.
// To avoid this we can make use of callbacks like setTimeout() which will perform by browser(uses c++/java which are asynchronous).

// ------> Callback Hell -> callback nesting
let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// first go according to above and reach last of this file and then come to below code b/c its using promises
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
  });

// ------> Setting up for Promises
// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// savetoDB(
//   "apna college",
//   () => {
//     console.log("success : your data was saved");
//     savetoDB(
//       "hello world",
//       () => {
//         console.log("success2 : data2 saved");
//         savetoDB(
//           "shradha",
//           () => {
//             console.log("success3 : data3 saved");
//           },
//           () => {
//             console.log("failure3 : weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 : weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure : weak connection. data not saved");
//   }
// );

// -----> Refactoring with Promises
function savetoDBPromise(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success: data saved");
    } else {
      reject("Failure: weak connection");
    }
  });
}
// let result = savetoDB("apna college");
// console.log(result);

// ------> Promises
// .then() and .catch()
// savetoDBPromise("apna college")
//   .then(() => {
//     console.log("promise resolved");
//   })
//   .catch(() => {
//     console.log("promise rejected");
//   });

// ------> Promise chaining
// this is like try and catch like we can have multiple try and for all of them we can have single catch
savetoDBPromise("apna college")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise : ", result);
    return savetoDBPromise("hello world");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise : ", result);
    return savetoDBPromise("sharadha");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise : ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("result of promise : ", error);
  });

// promise result and error as arguments of .then and .catch respectively.
// this result and error return the output of the promise resolve and reject respectively.
