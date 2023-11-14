const tiles = document.querySelectorAll(".tiles");
const reButton = document.getElementById("restartButton");
const commentBlock = document.getElementById("comments");

let currentPlayer = 1;


console.log();

// Player's turns
function play(e) {
    // console.log("play ran")
    // console.log(currentPlayer)
    // console.log(e.target)
    // console.log(e.target.id.replace("button", ""))
    
    if (currentPlayer == 1) {
        commentBlock.textContent = "Player 1's turn"
        e.target.textContent = 'X'
        currentPlayer += 1;
        commentBlock.textContent = "Player 2's turn"
    } else if (currentPlayer == 2) {
        e.target.textContent = 'O'
        currentPlayer -= 1;
        commentBlock.textContent = "Player 1's turn"
    }
    
}

tiles.forEach(tile => tile.addEventListener('click', e => play(e)))


// TODO:

// 1. Initialise start of game
// commentBlock.textContent = "Player 1's turn"


// 2. Get restart button to clear
// function restart() {
//     if (reButton.textContent === "RESTART") {
//         tiles.forEach(tiles => {
//         tiles.textContent = '';
//         // reButton.textContent = "RESTART";
//     });
//     }
// }

// reButton.forEach(reButton => reButton.addEventListener('click', () => restart()))


// 3. Check for winner



// POSSIBLE:

// 2. Initialise back to start of game

// function initialiseGame() {
//     buttons.forEach(button => {
//         buttons.textContent = '';
//         button.addEventListener('click', handleButtonClick);
//     });
//     currentPlayer = '1';
// }