//const gameboard = {
    //grid: ["topLeft", "topCenter", "topRight", "middleLeft", "middleCenter", "middleRight", "bottomLeft", "bottomCenter", "bottomRight"]
//};
const gameboard = {
    topLeft: undefined,
    topCenter: undefined,
    topRight: undefined,
    middleLeft: undefined,
    middleCenter: undefined,
    middleRight: undefined,
    bottomLeft: undefined,
    bottomCenter: undefined,
    bottomRight: undefined
};

const players = {playerOne: "x", playerTwo: "o"}
let game = {};

console.log(gameboard, players, game)

gameboard.topLeft = "o"
gameboard.middleCenter = "o"
gameboard.bottomRight = "o"

if ((gameboard.topLeft && gameboard.topCenter && gameboard.topRight === "x") ||
(gameboard.middleLeft && gameboard.middleCenter && gameboard.middleRight === "x") ||
(gameboard.bottomLeft && gameboard.bottomCenter && gameboard.bottomRight === "x") ||
(gameboard.topLeft &&  gameboard.middleLeft && gameboard.bottomLeft === "x") ||
(gameboard.topCenter && gameboard.middleCenter && gameboard.bottomCenter === "x") ||
(gameboard.topRight &&  gameboard.middleRight && gameboard.bottomRight === "x") ||
(gameboard.topLeft && gameboard.middleCenter && gameboard.bottomRight === "x" || === "o") ||
(gameboard.topRight &&  gameboard.middleCenter && gameboard.bottomLeft === "x")
) {
    alert('Player X wins!')
}

