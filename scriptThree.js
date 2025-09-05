let playerOne = 'x';
let playerTwo = 'o';

const squares = document.querySelectorAll('.squares');

let grid = [];
squares.forEach(square => {
    grid.push(square);
    square.addEventListener('click', function(event) {    
        const x = document.createElement('p');
        const o = document.createElement('p');
        x.textContent = "x";
        o.textContent = "o";
        square.appendChild(x);
        //square.appendChild(o);
        console.log(event.currentTarget.textContent);
    });
});
console.log(grid)

gridWinners = [
    [0,1,2], [3,4,5], [6,7,8],
    [1,3,6], [1,4,7], [2,5,8],
    [1,4,8], [2,4,7]
]