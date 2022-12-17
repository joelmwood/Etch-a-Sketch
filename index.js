const grid = document.querySelector(".gridContainer");

createGrid = () => {
  for(let i=0; i < 256; i++){
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

createGrid();