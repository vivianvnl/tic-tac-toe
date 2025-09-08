let grid = [];

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
                checkWin();
            }

            else if (currentPlayer == playerTwo) {
                square.appendChild(o);
                switchPlayer();
                checkWin();
            }

            function checkWin() {
                const gridWinners = [
                [0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]
                ]
                console.log(event.currentTarget.textContent);
                for (const combo of gridWinners) {
                    const [a, b, c] = combo;
                    if (
                        !grid[a].textContent == "" &&
                        grid[a].textContent === grid[b].textContent &&
                        grid[a].textContent === grid[c].textContent
                    ) {
                        switchPlayer();
                        console.log(`${currentPlayer} wins!`)
                        return;
                    } else {
                        continue;
                    }
                }
            }
        });
    });  
})();
console.log(grid);