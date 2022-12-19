let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const grid = document.querySelector(".gridContainer");
const resetButton = document.querySelector(".reset");
const blackButton = document.querySelector(".black");
const rainbowButton = document.querySelector(".rainbow");
// const userInput = document.getElementById("gridSize");

const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);


const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;

const DEFAULT_COLOR = "black";
let currentColorMode = DEFAULT_COLOR;


function updateSizeValue(value){
  sizeValue.innerHTML = `${value} x ${value}`;
}

function changeSize(value){
  setCurrentSize(value);
  updateSizeValue(value);
  clearGrid();
  createGrid(value);
}

function clearGrid(){
  grid.innerHTML = ``;
}
function setCurrentSize(newSize){
  currentSize = newSize;
}

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const divElement = document.createElement("div");
    // divElement.style.backgroundColor = "white";
    divElement.classList.add("square");
    divElement.addEventListener('mouseover', changeColor);
    divElement.addEventListener('mousedown', changeColor);
    grid.appendChild(divElement);
  }
};

// function updateGrid(){
//   grid.innerHTML = "";
//   if(userInput.value < 0 ){
//     createGrid(2);
//   }else if(userInput.value > 50){
//     createGrid(50);
//   }else {
//     createGrid(userInput.value);
//   }
// }

// userInput.addEventListener("change", updateGrid);

function changeColor(e){
  if(mouseDown){
    if(currentColorMode === "black"){
      e.target.style.backgroundColor = "black";
    } else if(currentColorMode === "rainbow"){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG},${randomB})`
    }       
  }    
}


resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid(currentSize);
});

blackButton.addEventListener("click", function() {
  currentColorMode = DEFAULT_COLOR;
});

rainbowButton.addEventListener("click", function() {
  currentColorMode = "rainbow";
});

createGrid(currentSize);