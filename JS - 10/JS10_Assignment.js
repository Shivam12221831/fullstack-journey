let ip = document.querySelector("#q1_input");
ip.addEventListener("keypress", () => {
  console.log(`Now text is ${ip.value}`);
  //   console.log(`keypressed`);
});
let heading = document.querySelector("#q1_heading");
heading.addEventListener("mouseout", () => {
  heading.style.color = "red";
  heading.style.fontSize = "40px";
});

let box = document.querySelector("#scroll-box");
let output = document.querySelector("p#output");
box.addEventListener("scroll", () => {
  output.textContent = "Scroll event fired!!";
  setTimeout(() => {
    output.textContent = "Waiting on scroll events...";
  }, 2000);
});

// Q-2
let button = document.createElement("button");
document.querySelector("body").appendChild(button);
button.innerText = "Click me!!";
button.addEventListener("click", () => {
  button.style.backgroundColor = "green";
});
