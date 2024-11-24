// DOM (Document Object Model)
// The DOM represents a document with a logical tree
// It allows us to manipulate/change webpage content (HTML elements).

// In js DOM is an object like we have window obj in which there are many methods to make change in html and css of any site through js
// You can see DOM object in console of browser by typing-
//  console.dir(document);

// ------> Selecting Elements

// 1-> getElementById
// Returns the elementas an object or null(if not found)

// 2-> getElementByClassName
// Returns the elements as an HTMl Collection or empty collection(if not found)

// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//   smallImages[i].src = "assets/spiderman_img.png";
//   console.log(`Value of image no. ${i + 1} is changed`);
// }

// **** In case of id not found it will give null as output while in case of className not found it will give empty HTML collection with length = 0.

// 3-> getElementByTagName
// Returns the elements as an HTMl Collection or empty collection(if not found)

// 4-> querySelector
// Allows us to see any css selector
// This will select the first element with that name

document.querySelector("p"); // Select first p element
document.querySelector("#myId"); // Selects first element with id = myId
document.querySelector(".myClass"); // Selects first element with class = myClass

// 5-> querySelectorAll
// Returns the collection of all elements present with this name

document.querySelectorAll("p"); // Select all p element

// ------> Setting content in object
// 1-> innerText  -> Shows the visible text contained in a node
// 2-> textCooontent -> Shows all the full text(hidden)
// 3-> innneerHTML -> Shows the full markup

// innerText - shows us the visible content according to the content shown on screen of the browser while
// textContent - shows us the visible + hidden content according to the content written in the html file.

// ------> Manipulating Attributes
// obj.getAttribute(attr)
// obj.setAttribute(attr, val)

// -------> Manipulating Style
// Style property
// obj.style

let heading = document.querySelector("h1");
heading.style.color = "green";

let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "purple";
// }
for (link of links) {
  link.style.color = "purple";
}
// This method on =ly set or change the inline style and do not make any change in css file. That's we do not prefer this method to set styling

// -------> ClassList Property
// obj.classList

// classList.add("className");   // to add new classes
// classList.remove("className");  // to remove classes
// classList.contains("className");   // to check if class exists or not
// classList.toggle("className");   // to toggle b/w add and remove

// ------> Navigation
// parentElement
// obj.parentElement
// children
// obj.children
// obj.childElementCount
// previousElementSibling / nextElementSibling
// obj.previousElementSibling
// obj.nextElementSibling

// ------> Adding elements on page
// document.createElement('ElementName');
// appendChild(element)
// append(element)
// prepand(element)
// insertAdjacentElement(where, element)
// where -- beforebegin, afterbegin, beforeend, afterend

// ------> Removing Elements
// removeChild(element)
// remove(element)
// parent_obj_name.removeChild(element_name)
// or
// element_name_to_be_removed.remove();
