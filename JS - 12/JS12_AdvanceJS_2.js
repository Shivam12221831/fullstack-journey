// ------> Async function
// these are nothing but promises that are written in the form of functions
// if function runs successfully without throwing any error then it return resolve of promise
// if there any error in async function then it return reject of promise.

async function greet() {
  throw "404 page not found!"; // throw -> used to create/show any error
  return "hello..";
}

greet()
  .then((result) => {
    console.log("promis was resolved");
    console.log("result was : ", result);
  })
  .catch((err) => {
    console.log("promise was rejected with err : ", err);
  });

// creating a arrow async function
// let demo = async () => {
//   return 5;
// };

// -----> await keyword
// It always use inside async function
// pauses the execution of its surrounding async functions until the promise is settled(resolved/rejected).

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num > 3) {
        console.log(num);
        resolve();
      } else {
        reject("promise rejected");
      }
    }, 1000);
  });
}

async function demo() {
  try {
    // -> handle rejections with await, you can use try and catch to handle it a/f rejection of a promise.
    await getNum();
    await getNum();
    await getNum();
  } catch (err) {
    console.log("Error caught : ", err);
  }

  let a = 5;
  console.log(a);
  console.log("Hello Everyone!");
}
demo();

// --------> API (Application Programming Interface)
// It work as a interface b/w a server and user and returns data in .json file format.

// some random basic APIs
// https://catfact.ninja/fact
// https://www.boredapi.com/api/activity
// https://dog.ceo/api/breeds/image/random

// -------> JSON(Javascript Object Notation)
// It is a type of a file format to store data that are fetched from API's

// Accessing Data from JSON

// 1> JSON.parse(data) method
// To parse a string data to js object

let jsonRes =
  '{    "fact": "The cat appears to be the only domestic companion animal not mentioned in the Bible.", "length": 84}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

// 2> JSON.stringify(json) Method
// To parse a js object to json data

let jsonData = JSON.stringify(validRes);
console.log(jsonData);

// -------> Testing API requests
// Tools
// 1-> Hoppscoth
// 2-> Postman

// -------> Our first API request
let url = "https://catfact.ninja/fact";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("data1 = ", data.fact);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("data2 = ", data.fact);
  })
  .catch((err) => {
    console.log("ERROR - ", err);
  });

// Using fetch with async and await

let url2 = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url2);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url2);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (e) {
    console.log("Error - ", e);
  }
  console.log("Bye-Bye");
}
getFacts();
