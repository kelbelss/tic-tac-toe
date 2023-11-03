const buttons = document.querySelectorAll('button')

function play(button) {
    const value = button.textContent
    if (value === ".") {
        button.textContent = 'X'
    } else if (value === "-") {
        button.textContent = 'O'
    }
}

buttons.forEach(button => button.addEventListener('click', () => play(button)))

// TODO:

// 

// function restart(button) {
//     const value = button.textContent
//     if (value === "RESTART") {
//         button.textContent = button
//     }
// }

// button.forEach(button => button.addEventListener('click', () => restart(button)))