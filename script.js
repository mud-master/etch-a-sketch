const container = document.querySelector("#container");
const gridInput = document.querySelector("#gridInput");

function buildGrid(gridSize) {
  for (i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("gridRow");
    gridRow.className = "gridRow";
    container.insertBefore(gridRow, container.firstChild);

    // create the columns
    for (j = 0; j < gridSize; j++) {
      const block = document.createElement("block");
      block.className = "block";
      gridRow.appendChild(block);
      block.addEventListener("mouseover", function () {
        block.style.backgroundColor = "blue";
      });
      block.style.width = 500 / gridSize + "px";
      block.style.height = 500 / gridSize + "px";
    }
  }
}

buildGrid(16);

gridInput.addEventListener("keyup", event => {
  if (event.key == "Enter") {
    if (gridInput.value >= 1 && gridInput.value <= 200) {
        document.querySelectorAll('.gridRow').forEach(e => e.remove());
        buildGrid(gridInput.value);
    } else {
      alert("Oops, your grid size must be between 1 and 200");
    }
  }
});
