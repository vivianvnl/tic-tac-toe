function playGame(playerOneName, playerTwoName) {
    const players = {
        playerOne: {name: playerOneName, marker: 'X'},
        playerTwo: {name: playerTwoName, marker: 'O'}
    };

    let currentPlayer = players.playerOne;

    function switchPlayer() {
        currentPlayer = (currentPlayer == players.playerOne) ? players.playerTwo : players.playerOne;
    }

    let grid = [];
    const squares = document.querySelectorAll('.squares');
    let status = document.getElementById('status');
    let playerMoveCounter = 0;

    const resetButton = document.getElementById('resetButton');
    resetButton.style.display = 'block';
    resetButton.addEventListener('click', () => {
        grid = [];
        squares.forEach(square => {
            grid.push(square);
            square.textContent = '';
            status.textContent = `${currentPlayer.name}'s move`;
            playerMoveCounter = 0;
        });
        return;
    });
    
    squares.forEach(square => {
        grid.push(square);
        square.classList.toggle('active');
        status.textContent = `${currentPlayer.name}'s move`;
        
        square.addEventListener('click', function(event) {    
            const playerMove = document.createElement('p');
            playerMove.textContent = currentPlayer.marker;
            
            if (event.currentTarget.textContent && checkWin() !== 'win' && checkDraw() !== 'draw') {
                status.textContent = 'This spot has already been chosen. Try again!';
            } else if (!event.currentTarget.textContent) {
                if (playerMoveCounter === 0) {
                    square.appendChild(playerMove);
                    playerMoveCounter = 1;
                } if (checkWin() === 'win') {
                    status.textContent = `${currentPlayer.name} wins!`;
                } if (checkDraw() === 'draw') {
                    status.textContent = 'Draw!';
                } else if (checkWin() !== 'win' && checkDraw() !== 'draw') {
                    switchPlayer();
                    status.textContent = `${currentPlayer.name}'s move`;
                    playerMoveCounter = 0;
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
                if (checkWin() !== 'win') {
                    return 'draw';
                }
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
                        return 'win';
                    } else {
                        continue;
                    }
                }
            }
        });
    });  
};

(function startGame() {
    const form = document.getElementById('form');
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', (event) => {
        event.preventDefault();
        const playerOne = document.getElementById('playerOne').value;
        const playerTwo = document.getElementById('playerTwo').value;
        playGame(playerOne, playerTwo);
        
        form.reset();
        form.style.display = 'none';
        startButton.style.display = 'none';
    });
    
})();