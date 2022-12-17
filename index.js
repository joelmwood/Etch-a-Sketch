const grid = document.querySelector(".gridContainer");
const resetButton = document.querySelector(".reset");
let color = "white";

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const divElement = document.createElement("div");
    divElement.classList.add("square");
    divElement.addEventListener('mouseover', changeColor)
    grid.appendChild(divElement);
  }
};

function changeColor(e){
  e.target.style.backgroundColor = "grey";
}


resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();