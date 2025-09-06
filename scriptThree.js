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
                //switchPlayer();
                checkWin();
            }

            else if (currentPlayer == playerTwo) {
                square.appendChild(o);
                //switchPlayer();
                checkWin();
            }

            function checkWin() {
                const gridWinners = [
                [0,1,2], [3,4,5], [6,7,8],
                [1,3,6], [1,4,7], [2,5,8],
                [1,4,8], [2,4,7]
                ]

                for (let i = 0; i < gridWinners.length; i++) {
                    for (let j = 0; j < 3; j++) {
                        //console.log(grid[[i][j]].textContent);
                        if (grid[[i][j]].textContent !== 'x' || grid[[i][j]].textContent === undefined) {
                            return;
                        }
                        if (j === 2 && grid[[i][j]].textContent === 
                            grid[[i][j-1]].textContent ===
                             grid[[i][j-2]].textContent) {
                                console.log('Player 1 wins!');
                        }
                        if (grid[[i][j]].textContent === 'x') {
                            continue;
                        }
                    }
                    return;
                }
            }
        console.log(grid[0].textContent)
        console.log(event.currentTarget.textContent);
        });
    });
    console.log(grid)
    
})();
