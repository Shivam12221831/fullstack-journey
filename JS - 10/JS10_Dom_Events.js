// DOM Events
// Events are signals that something has occurred. (user inputs / action)

let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function () {
  console.log("Button is clicked");
};
// btn.addEventListener("mousedblclick");
let btns = document.querySelectorAll(".like");
// for (btn of btns) {
// //   btn.onclick = sayHello;
// //   btn.onclick = sayName;
//   btn.onmouseenter = function () {
//     console.log("You entered a button");
//   };
// }
function sayHello() {
  alert("Hello!");
}
function sayName() {
  alert("Apna College");
}

// When using this type of DOM events we found that one object can perform single function on same event like-
// in above code - btn.onclick = sayHello and btn.onclick = sayName
// for that output fucntion that runs is only sayName not sayHello

// To avoid this we have addEventListner in which you can perform multiple function over a single event of an object

// -------> Event Listener
// element.addEventListener(event, callback);

for (btn of btns) {
  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
}
// To study more about addEventListener on MDN site

// Add =ing addEventListener to any element of html page
let p = document.querySelector("p");
p.addEventListener("click", () => {
  console.log("Paragraph is clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", () => {
  console.log("You are in the box");
});
box.addEventListener("mouseleave", () => {
  console.log("You are out of the box");
});

// ------> this in EventListener
// When 'this' is used in a callback of event handler of something, it refers to that something.
// means this implies the object in which it is used

let this_h1 = document.querySelector(".this h1");
let this_h3 = document.querySelector(".this h3");
let this_p = document.querySelector(".this p");
let this_btn = document.querySelector(".this button");

function changeColor() {
  console.log(this.innerText);
  this.style.backgroundColor = "blue";
}

this_h1.addEventListener("click", changeColor);
this_h3.addEventListener("click", changeColor);
this_p.addEventListener("click", changeColor);
this_btn.addEventListener("click", changeColor);

// -----> event as default argument in addEventListener
// Whenever we use addEventListener, it has a default argument as event in its callback function
// This event - returns as an object of event like what event has performed right now

// let btn = document.querySelector("button");
// btn.addEventListener('click', function(event) {
//      console.log(event);
// })

// ------> Form event
let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();    // It is used to restrict to perform default task of event
//   alert("Form Submitted!");
// });

// Extracting form data
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   let user = document.querySelector("#user");
  //   let pass = document.querySelector("#pass");
  console.log(form.elements);
  let user = form.elements[0];
  let pass = form.elements[1];
  console.log(user.value);
  console.log(pass.value);
  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

// -----> More Events - change and input
// Change event - It occurs when the value of an element hass been changed(only work on <input>, <textarea> and <select> elements).
// Input event - It fires when the value of an <input>, <select>, or <textarea> element has been changed

// Making a text editor
let text = document.querySelector("#input");
let para = document.querySelector("#input_para");

text.addEventListener("input", () => {
  console.log(text.value);
  para.innerText = text.value;
});

// ------> Event bubbling
let div = document.querySelector("#list");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", (event) => {
  console.log("div is clicked");
});
ul.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("ul is clicked");
});
for (li of lis) {
  li.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("li is clicked");
  });
}
