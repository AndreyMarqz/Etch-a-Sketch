const container = document.querySelector(".container");
const gridSize = 16;

function createGrid() {
    let input = prompt("How many squares do you want? (from 1 to 100)");
    let value = parseInt(input); 

    while (isNaN(value) || value < 1 || value > 100) {
        if (input === null) return;
        alert("Type a valid number between 1 and 100!");
        input = prompt("How many squares do you want? (from 1 to 100)");
        if (input === null) return; 
        value = parseInt(input);
    }

    for(let i = 0; i < value; i++){
        const grid = document.createElement("div");
        grid.classList.add("squareDiv");
        container.appendChild(grid);
    }
}

createGrid();
