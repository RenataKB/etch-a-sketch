const container = document.querySelector('div.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        row.appendChild(square);          
    }
    container.appendChild(row);
}

const squares = document.querySelectorAll('div.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.setAttribute('style', 'background-color: black');
    });
});
