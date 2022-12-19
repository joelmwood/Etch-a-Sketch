

const grid = document.querySelector(".gridContainer");
const resetButton = document.querySelector(".reset");
const blackButton = document.querySelector(".black");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");

const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

blackButton.onclick = () => activateButton('black');
rainbowButton.onclick = () => activateButton('rainbow');
eraserButton.onclick = () => activateButton('eraser');


const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;

const DEFAULT_COLOR_MODE = "black";
let currentColorMode = DEFAULT_COLOR_MODE;

// const DEFAULT_MODE = 'black';
// let currentMode = DEFAULT_MODE;


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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
    const gridElement = document.createElement("div");
    gridElement.classList.add("square");
    gridElement.addEventListener('mouseover', changeColor);
    gridElement.addEventListener('mousedown', changeColor);
    grid.appendChild(gridElement);
  }
};


function changeColor(e){
  if (e.type === 'mouseover' && !mouseDown) return;
  if(currentColorMode === `rainbow`){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG},${randomB})`
  } else if (currentColorMode === `black`){
    e.target.style.backgroundColor = "black";
  } else if(currentColorMode === 'eraser'){
    e.target.style.backgroundColor = 'white';
  }
}

function activateButton(newMode){
  if (currentColorMode === 'black'){
    blackButton.classList.remove("activeButton");
  }else if (currentColorMode === 'rainbow'){
    rainbowButton.classList.remove("activeButton");
  }else if (currentColorMode === 'eraser'){
    eraserButton.classList.remove("activeButton");
  }

  if (newMode === 'black'){
    blackButton.classList.add("activeButton");
  }else if(newMode === 'rainbow'){
    rainbowButton.classList.add("activeButton");
  }else if(newMode === 'eraser'){
    eraserButton.classList.add("activeButton");
  }
}

blackButton.addEventListener("click", function() {
  currentColorMode = 'black';
});

rainbowButton.addEventListener("click", function() {
  currentColorMode = "rainbow";
});

eraserButton.addEventListener("click", function(){
  currentColorMode = "eraser";
});


resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid(currentSize);
});

window.onload = () => {
  createGrid(currentSize);
}