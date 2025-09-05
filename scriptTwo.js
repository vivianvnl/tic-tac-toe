const gameBoard = ["", "", "", "", "", "", "", "", ""];

const players = {playerOne: 'x', playerTwo: 'o'}

const gameWin = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function checkWin() {
    for (let i = 0; i < gameWin.length; i++) {
        let cellA = gameWin[i][0];
        let cellB = gameWin[i][1];
        let cellC = gameWin[i][2];
    }
}