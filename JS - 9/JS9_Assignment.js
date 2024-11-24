// Q-1
let input = document.createElement("input");
let btn = document.createElement("button");
document.querySelector("body").append(input);
document.querySelector("body").append(btn);
btn.innerText = "Click me";

// Q-2
input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

// Q-3
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// Q-4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
h1.style.color = "purple";
document.querySelector("body").append(h1);

// Q-5
let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para);
