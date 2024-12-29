const container = document.querySelector("#container");

createGrid(16);

function createGrid(size) {

    for (let i = 0; i < size * size; i++) {
        div = document.createElement('div');
        
        //calculate dimensions of box: 960 is max width of container;
        //divide by number of boxes - 2px (border)
        dimensions = (960 / size) - 2;
        div.style =  `display: flex; 
                        border: 1px solid lightgray; 
                        height: ${dimensions}px; 
                        width: ${dimensions}px;`;
        console.log(div.style);

        //add other stuff
        div.classList.add("grid-div");
        div.addEventListener("mouseleave", (event) => {
            event.target.classList.add("blue");
        });
        container.appendChild(div);
    }

}

function newGrid() {
    
    let squareCount = '';
    squareCount = prompt("How many squares per side? (Max 100)");
    
    if (squareCount > 100) {
        alert('Too many squares! Enter a number less than 100.');
        return;
    }

// existing grid removed
    container.innerHTML = "";

// new grid created in same total space as before
    createGrid(squareCount);

}


