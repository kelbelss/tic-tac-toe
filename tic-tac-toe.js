const buttons = document.querySelectorAll(' #board button');
const reButton = document.getElementById('restartButton');

let currentPlayer = 'X';




// console.log();

// function play(button) {
//     const value = button.textContent
//     if (value === ".") {
//         button.textContent = 'X'
//     } else if (value === "-") {
//         button.textContent = 'O'
//     }
// };

// buttons.forEach(button => button.addEventListener('click', () => play(button)))

// TODO:

// 1. Get restart button to clear

// function restart(restartButton, buttons) {
//     if (restartButton.textContent === "RESTART") {
//         buttons.forEach(button => {
//         button.textContent = null;
//         restartButton.textContent = "RESTART";
//     });
//     }
// };

// reButton.forEach(restartButton => restartButton.addEventListener('click', () => restart(restartButton, buttons)))

// 2. Initialise back to start of game

function initialiseGame() {
    buttons.forEach(button => {
        buttons.textContent = '';
        button.addEventListener('click', handleButtonClick);
    });
    currentPlayer = 'X';
}

// Event listener for player moves

function handleButtonClick() {
    if (this.textContent === '') {
        this.textContent = currentPlayer;
    checkGameStatus();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Check game status

function checkGameStatus() {


}


reButton.addEventListener('click', initialiseGame);
initialiseGame();



// 3. Take turns

// function turns(buttons) {

// }



// 4. display whose turn it is - using hidden tags


// 5. Check for winner 

// function winner(button1, button2, button3, buttons) {

//     if (button1 === "O" && button2 === "O" && button3 === "O") {
//         buttons.forEach(button => {
//         button.textContent = "WIN";
//         });
//     }

// };

// buttons.forEach(button => button.addEventListener('click', () => winner(buttonOne, buttonTwo, buttonThree, buttons)));