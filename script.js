let square = document.querySelector('#square'); //Square shaped parent container for pixels

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
        pixels[i].addEventListener('mouseenter', () => {
            console.log('mouseenter event triggered');
            pixels[i].style.backgroundColor = pencil;
            console.log(pencil);
        });
        
    }
    return pencil;
}

function launch() {
    let launcher = document.querySelector('#launch');
    console.log(launcher)
    launcher.addEventListener('click', () => numberCheck());
}

launch();

function eraze() {
    let erazer = document.querySelector('#eraze');
    erazer.addEventListener('click', () => removeGrid());
}

// Remove all pixels created
function removeGrid() {
    let pixels = getPixels();
    for (i = 0; i<pixels.length; i++) {
        pixels[i].remove();
    }
}

eraze();

function getPixels() {
    let pixels = document.querySelectorAll('.pixel');
    return pixels;
}

function whitePencil() {
    let rubber = document.querySelector('#whitePencil');
    rubber.addEventListener('click', () => {
        let pixels = getPixels();
        selectPixels(pixels, "white");
    }
    );
}

whitePencil();

