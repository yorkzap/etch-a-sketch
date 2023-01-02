let square = document.querySelector('#square'); //Square shaped parent container for pixels

// Create "gridsize" number of pixels inside square
function createGrid(gridSize) {
    let pixels = [];
    let gridSizeSquare = gridSize*gridSize;
    for (let i = 0; i < gridSizeSquare; i++) {
        pixels[i] = document.createElement('div');
        pixels[i].setAttribute("class", "pixel");
        pixels[i].style.width = 100/gridSize + "%"; //Make items equally wide for "flex-wrapping"
        square.appendChild(pixels[i]);
    }
    selectPixels(pixels);
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

// Receive a nodelist of the pixels created

// Select individual pixel upon mouseover
function selectPixels(pixels) {
    for (let i = 0; i < pixels.length; i++ ) {
        pixels[i].addEventListener('mouseenter', () => pixels[i].style.backgroundColor = "black");
    }
}

function launch() {
    let launcher = document.querySelector('#launch');
    console.log(launcher)
    launcher.addEventListener('click', () => numberCheck());
}


launch();
