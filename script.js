const container = document.querySelector('div.container');

function createGrid(size=16) {
    for (let i = 0; i < size; i++) {
        const squareSize = 960/size;
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.width = `${squareSize}px`;
            square.style.height= `${squareSize}px`;
            row.appendChild(square);          
        }
        container.appendChild(row);
    }
    colorSquare();
}

function colorSquare() {
    const squares = document.querySelectorAll('div.square');
    const mainColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = mainColor;
            square.style.opacity = (parseFloat(square.style.opacity) || 0) + 0.1;
        });
    });
}

function isValid(n) {
    return Number.isInteger(n) && (n > 0 && n <= 100);
}

const sizeButton = document.querySelector('button.size');
sizeButton.addEventListener('click', () => {
    let size;
    do {
        size = prompt('Choose the size of the grid (max: 100):');
        if (size === null) return;
        size = parseInt(size, 10);
    } while (!isValid(size));
    container.textContent = '';
    createGrid(size);
});

const resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('div.square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
        square.style.opacity = 0;
    });
    colorSquare();
});

createGrid();