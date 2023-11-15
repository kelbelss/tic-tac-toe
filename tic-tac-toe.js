const tiles = document.querySelectorAll(".tiles");
const reButton = document.getElementById("restartButton");
const commentBlock = document.getElementById("comments");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");

const TEXT_X = 'X';
const TEXT_O = 'O';

let score1 = 0;
let score2 = 0;
let currentPlayer = 1;
let playCount = 0;



// Check for winner
function checkStatus() {
    
    if (button1.textContent === TEXT_X && button2.textContent === TEXT_X && button3.textContent === TEXT_X || button1.textContent === TEXT_X && button4.textContent === TEXT_X && button7.textContent === TEXT_X || button1.textContent === TEXT_X && button5.textContent === TEXT_X && button9.textContent === TEXT_X || button2.textContent === TEXT_X && button5.textContent === TEXT_X && button8.textContent === TEXT_X || button3.textContent === TEXT_X && button6.textContent === TEXT_X && button9.textContent === TEXT_X || button3.textContent === TEXT_X && button5.textContent === TEXT_X && button7.textContent === TEXT_X || button4.textContent === TEXT_X && button5.textContent === TEXT_X && button6.textContent === TEXT_X || button7.textContent === TEXT_X && button8.textContent === TEXT_X && button9.textContent === TEXT_X) {
        commentBlock.textContent = "Player 1 wins!"
        currentPlayer = 0 
        score1 += 1;
        updateScore();
        console.log(score1);
    } else if (button1.textContent === TEXT_O && button2.textContent === TEXT_O && button3.textContent === TEXT_O || button1.textContent === TEXT_O && button4.textContent === TEXT_O && button7.textContent === TEXT_O || button1.textContent === TEXT_O && button5.textContent === TEXT_O && button9.textContent === TEXT_O || button2.textContent === TEXT_O && button5.textContent === TEXT_O && button8.textContent === TEXT_O || button3.textContent === TEXT_O && button6.textContent === TEXT_O && button9.textContent === TEXT_O || button3.textContent === TEXT_O && button5.textContent === TEXT_O && button7.textContent === TEXT_O || button4.textContent === TEXT_O && button5.textContent === TEXT_O && button6.textContent === TEXT_O || button7.textContent === TEXT_O && button8.textContent === TEXT_O && button9.textContent === TEXT_O) {
        commentBlock.textContent = "Player 2 wins!"
        currentPlayer = 0; 
        score2 += 1;
        updateScore();
    } else if (playCount === 9) {
        commentBlock.textContent = "No winner :(";
        currentPlayer = 0;
    }
}


// Player's turns
function play(e) {
    // console.log("play ran")
    // console.log(currentPlayer)
    // console.log(e.target)
    // console.log(e.target.id.replace("button", ""))
    
    if (currentPlayer == 1 && e.target.textContent != TEXT_O && e.target.textContent != TEXT_X) {
        commentBlock.textContent = "Player 1's turn"
        e.target.textContent = TEXT_X;
        currentPlayer += 1;
        playCount += 1;
        commentBlock.textContent = "Player 2's turn"
        checkStatus(e);
    } else if (currentPlayer == 2 && e.target.textContent != TEXT_O && e.target.textContent != TEXT_X) {
        e.target.textContent = TEXT_O;
        currentPlayer -= 1;
        playCount += 1;
        commentBlock.textContent = "Player 1's turn"
        checkStatus(e);
    }
}
// tiles.forEach(tile => tile.addEventListener('click', e => play(e)))


// Start and restart
function start() {
    commentBlock.textContent = "Player 1's turn"
    updateScore();
    playCount = 0;
    currentPlayer = 1;
    if (reButton.textContent == "Restart") {
        tiles.forEach(tile => {
            tile.textContent = '';
        })
    }
}
// reButton.addEventListener('click', start);


// Update the scores
function updateScore() {
    
    scoreOne.innerHTML = score1;
    scoreTwo.textContent = score2;
}

start();
reButton.addEventListener('click', start);
tiles.forEach(tile => tile.addEventListener('click', e => play(e)))