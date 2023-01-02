let square = document.querySelector('#square'); //Square shaped parent container for pixels

let erazer = document.querySelector('#eraze');
erazer.addEventListener('click', () => removeGrid());

let launcher = document.querySelector('#launch');
launcher.addEventListener('click', () => numberCheck());

// Use rubber to eraze colored pixels
let rubber = document.querySelector('#whitePencil');
rubber.addEventListener('click', () => {
    let pixels = getPixels();
    selectPixels(pixels, "white");
});

// Generate Nodelist of divs/pixels
function getPixels() {
    let pixels = document.querySelectorAll('.pixel');
    return pixels;
}

// Create "gridsize" number of pixels inside square
function createGrid(gridSize) {
    let pixels = getPixels();
    if (pixels !== null) removeGrid();
    pixels = [];
    let gridSizeSquare = gridSize*gridSize;
    for (let i = 0; i < gridSizeSquare; i++) {
        pixels[i] = document.createElement('div');
        pixels[i].setAttribute("class", "pixel");
        pixels[i].style.width = 100/gridSize + "%"; //Make items equally wide for "flex-wrapping"
        square.appendChild(pixels[i]);
    }
    selectPixels(pixels, "black");
    return pixels;
}
// Restrict rows/columns to a max 100 for avoiding crashing/freezing
function numberCheck() {
    let number = prompt('Number of pixels on each row and column', '');
    if (number > 100) {
        
        number = prompt('Please enter a number less than 100', '');
    }
    let pixels = createGrid(number);
    return pixels;
}

// Select individual pixel upon mouseover
function selectPixels(pixels, pencil) {
    for (let i = 0; i < pixels.length; i++ ) {
        pixels[i].addEventListener('mouseenter', () => pixels[i].style.backgroundColor = pencil);
    }
}

// Remove all pixels created
function removeGrid() {
    let pixels = getPixels();
    for (i = 0; i<pixels.length; i++) {
        pixels[i].remove();
    }
}

// Use rubber to eraze colored pixels
