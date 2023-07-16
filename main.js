const player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    }
    return {getSign};
}

const Gameboard = (function (){
    const board = [];

    const resetboard = () => {
        for (let i = 0; i<board.length; i++){
            board[i] = "";
        }
    }

    return {board, resetboard}
})();

const playerX = player("X");
const playerO = player("O");
const X = playerX.getSign()
const O = playerO.getSign()

const display = document.querySelector('[class = "playGrid"]')
const boxes = display.querySelectorAll('div');

function updateGrid()
{
    for (let i = 0; i< boxes.length; i++){
        boxes[i].textContent = "";
    }
}

const restartButton = document.getElementById('restart')

restartButton.onclick = () => {
    updateGrid()
    Gameboard().resetboard();    
}


