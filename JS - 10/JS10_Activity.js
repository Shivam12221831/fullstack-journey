let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("Color updated");
  document.querySelector("h3").innerText = getRandomColor();
  document.querySelector("#div").style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
