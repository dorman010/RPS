let payerScore = 0
let compputerScore = 0
const buttons = document.querySelector('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
computerPlay()
// disable buttons at the end of the game
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

// computerPlay(rpsComp)

/* function invalidChoice() {
    // return 'Please select from the player choice';
    console.log('Please select from the player choice section to the left');
} */ 

