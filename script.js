const container = document.querySelector("#container");


let gridSize = 16;

// Create the rows
for (i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("gridRow");
    gridRow.className = 'gridRow';
    container.appendChild(gridRow);

    // create the columns
    for (j = 0; j < gridSize; j++) {
        const block = document.createElement("block");
        block.className = 'block';
        gridRow.appendChild(block);
        block.addEventListener("mouseover", function () {block.style.backgroundColor = "blue"});
    }
}

function sketch() {
    
}