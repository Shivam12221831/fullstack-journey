// DOM (Document Object Model)
// The DOM represents a document with a logical tree
// It allows us to manipulate/change webpage content (HTML elements).

// In js DOM is an object like we have window obj in which there are many methods to make change in html and css of any site through js
// You can see DOM object in console of browser by typing-
//  console.dir(document);



// --------------------------------------
// Practice Qs

let para = document.createElement("p");
para.innerText = "Hey I'm red!";
document.querySelector("body").append(para);
para.style.color = "red";

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").append(h3);
h3.style.color = "blue";

let newDiv = document.createElement("div");
document.querySelector("body").append(newDiv);
newDiv.classList.add("last_div");

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
newDiv.appendChild(h1);

let p = document.createElement('p');
p.innerHTML = "ME TOO!";
newDiv.appendChild(p);
