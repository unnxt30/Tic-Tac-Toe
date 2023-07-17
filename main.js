// Getting the User End Sorted
const player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    }
    const hasMoved = false;
    return { hasMoved, getSign};
}

const Gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

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

// Accessing the Playing Grid of the Game
const display = document.querySelector('[class = "playGrid"]')
const boxes = display.querySelectorAll('div');
function updateGrid()
{
    for (let i = 0; i< boxes.length; i++){
        boxes[i].textContent = "";
    }
}

let count = 0;

// Playing Feature.
for (let j = 0; j<boxes.length; j++){
    boxes[j].onclick = function(event)
    {    
        count++;
        console.log(count);
        if (boxes[j].textContent != "")
        {
            boxes[j].textContent = boxes[j].textContent;
        }
        else
        {
            if(playerX.hasMoved == false && playerO.hasMoved == false){
                boxes[j].textContent = X;
                Gameboard.board[j] = X
                playerX.hasMoved = true

            }
            else if (playerX.hasMoved == true)
            {
                boxes[j].textContent = O;
                Gameboard.board[j] = O;
                playerX.hasMoved = false;
                playerO.hasMoved = true;
            }
            else if (playerO.hasMoved == true)
            {
                boxes[j].textContent = X;
                Gameboard.board[j] = X;
                playerX.hasMoved = true;
                playerO.hasMoved = false;
            }

            if(isWinner())
            {   
                count = 0;
                let winner = (playerX.hasMoved == true) ? X : O;
                const winDisplay = document.querySelector('.winnerModal');
                const overlay = document.querySelector('.overlay')
                winDisplay.textContent = `${winner} has won!`
                winDisplay.classList.add('active');
                overlay.classList.add('active');
                overlay.onclick = () =>
                {
                    winDisplay.classList.remove('active');
                    overlay.classList.remove('active');
                    terminate();
                }
            }

            if(count == 9){
                const winDisplay = document.querySelector('.winnerModal');
                const overlay = document.querySelector('.overlay')
                winDisplay.textContent = `It's a Draw.`
                winDisplay.classList.add('active');
                overlay.classList.add('active');
                overlay.onclick = () =>
                {
                    winDisplay.classList.remove('active');
                    overlay.classList.remove('active');
                    terminate();
                }
            }
            
        }
        
        
        
        
    }
    
        
    }

// Restart Button
function terminate(){
    updateGrid()
    setDefault(playerX);
    setDefault(playerO); 
    Gameboard.resetboard();
}
const restartButton = document.getElementById('restart')
restartButton.onclick = () => {
    terminate();
}

//Winning Condition.
function isWinner(){
    game = Gameboard.board;
    function equal(x, y, z){
        if (game[x] == game[y] && game[y] == game[z] && game[x]!="")
        {
            return true;
        }
        return false;
    }
    if(equal(0,1,2)|| equal(3,4,5) || equal(6,7,8)){
        return true;
    }
    else if(equal(0,3,6) || equal(1,4,7) || equal(2,5,8) ){
        return true;
    }
    else if(equal(0,4,8) || equal(2,4,6)){
        return true;
    }

    return false;
}


function setDefault(foo){
    foo.hasMoved = false;
}