const grid = document.querySelector(".gridContainer");
const resetButton = document.querySelector(".reset");
let color = "white";
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const divElement = document.createElement("div");
    divElement.style.backgroundColor = "white";
    divElement.classList.add("square");
    divElement.addEventListener('mouseover', changeColor);
    divElement.addEventListener('mousedown', changeColor);
    grid.appendChild(divElement);
  }
};

function changeColor(e){
  if(mouseDown){
    if(e.target.style.backgroundColor == "white"){
      e.target.style.backgroundColor = "grey";
    }else{
      e.target.style.backgroundColor = "black";
    }
  }  
    
}


resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();