let payerScore = 0
let compputerScore = 0
const buttons = document.querySelector('input')

let rpsComp = ['Rock', 'Paper', 'Scissors'];

function computerPlay(arr){
    const random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random)
    return random;
}

computerPlay(rpsComp)

//* let playerChoice = prompt('Rock, paper or scissors?')
console.log(playerChoice);