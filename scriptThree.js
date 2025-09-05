let playerOne = 'x';
let playerTwo = 'o';

const squares = document.querySelectorAll('.squares');

squares.forEach(square => {
    const x = document.createElement('p');
    const o = document.createElement('p');
    x.textContent = "x";
    o.textContent = "o";
    //square.appendChild(x);
    square.appendChild(o);
});
