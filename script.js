let square = document.querySelector('#square'); //Square shaped parent container for pixels
let pixels = [];

// Create "gridsize" number of pixels inside square
function createGrid(gridSize) {
    let gridSizeSquare = gridSize*gridSize;
    for (let i = 1; i <= gridSizeSquare; i++) {
        pixels[i] = document.createElement('div');
        pixels[i].setAttribute("class", "pixel");
        pixels[i].style.width = 100/gridSize + "%"; //Make items equally wide for "flex-wrapping"
        square.appendChild(pixels[i]);
    }
}

createGrid(8);