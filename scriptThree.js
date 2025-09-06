let grid = [];

gridWinners = [
    [0,1,2], [3,4,5], [6,7,8],
    [1,3,6], [1,4,7], [2,5,8],
    [1,4,8], [2,4,7]
]

const playGame = (function() {
    let playerOne = 'x';
    let playerTwo = 'o';

    let currentPlayer = playerOne;

    function switchPlayer() {
        currentPlayer = (currentPlayer == playerOne) ? playerTwo : playerOne;
    }

    const squares = document.querySelectorAll('.squares');
    squares.forEach(square => {
        grid.push(square);
        square.addEventListener('click', function(event) {    
            const x = document.createElement('p');
            const o = document.createElement('p');
            x.textContent = "x";
            o.textContent = "o";

            if (currentPlayer == playerOne) {
                square.appendChild(x);
                switchPlayer();
            }

            else if (currentPlayer == playerTwo) {
                square.appendChild(o);
                switchPlayer();
            }
            
            console.log(event.currentTarget.textContent);
        });
    });
    console.log(grid)
})();
