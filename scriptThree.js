function playGame(playerOne, playerTwo) {
    const players = {
        playerOne: {name: playerOne, marker: 'X'},
        playerTwo: {name: playerTwo, marker: 'O'}
    };

    let currentPlayer = players.playerOne;

    function switchPlayer() {
        currentPlayer = (currentPlayer == players.playerOne) ? players.playerTwo : players.playerOne;
    }

    let grid = [];
    const squares = document.querySelectorAll('.squares');
    let status = document.getElementById('status');
    
    squares.forEach(square => {
        grid.push(square);
        square.classList.toggle('active');
        status.textContent = `${currentPlayer.name}'s move`;
        
        square.addEventListener('click', function(event) {    
            const playerMove = document.createElement('p');
            playerMove.textContent = currentPlayer.marker;
            
            if (event.currentTarget.textContent) {
                status.textContent = 'This spot has already been chosen. Try again!';
            }
            else {
                
                square.appendChild(playerMove);
                //checkWin();
                if (checkWin() === 'win') {
                    status.textContent = `${currentPlayer.name} wins!`;
                } else {
                    if (checkDraw() === 'draw') {
                        status.textContent = 'Draw!';
                    } else {
                        switchPlayer();
                        status.textContent = `${currentPlayer.name}'s move`;
                    }
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
                return 'draw';
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
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', (event) => {
        event.preventDefault();

        const playerOneId = document.getElementById('playerOne').value;
        const playerTwoId = document.getElementById('playerTwo').value;
        playGame(playerOneId, playerTwoId);
    });
})();