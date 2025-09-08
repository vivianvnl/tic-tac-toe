let grid = [];

const playGame = (function() {
    const players = {
        playerOne: 'x',
        playerTwo: 'o'
    };

    let currentPlayer = players.playerOne;

    function switchPlayer() {
        currentPlayer = (currentPlayer == players.playerOne) ? players.playerTwo : players.playerOne;
    }

    const squares = document.querySelectorAll('.squares');
    
    squares.forEach(square => {
        grid.push(square);
        
        square.addEventListener('click', function(event) {    
            const playerMove = document.createElement('p');
            playerMove.textContent = currentPlayer;
            
            if (event.currentTarget.textContent) {
                alert ('This spot has already been chosen. Try again!');
            }
            else {
                square.appendChild(playerMove);
                checkWin();
                if (checkWin !== 'win') {
                    checkDraw();
                    switchPlayer();
                }
                
            }
            
            function checkDraw() {
                for (let i = 0; i < grid.length; i++) {
                    if (!grid[i].textContent) {
                        return;
                    }
                    else {
                        continue;
                    }
                }
                console.log('Draw!');
            }
            
            function checkWin() {
                const gridWinners = [
                [0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]
                ]

                for (const combo of gridWinners) {
                    const [a, b, c] = combo;
                    if (
                        grid[a].textContent &&
                        grid[a].textContent === grid[b].textContent &&
                        grid[a].textContent === grid[c].textContent
                    ) {
                        console.log(`${currentPlayer} wins!`);
                        return 'win';
                        
                    } else {
                        continue;
                    }
                }
            }
        });
    });  
})();