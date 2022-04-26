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

function invalidChoice() {
    // return 'Please select from the player choice';
    console.log('Please select from the player choice section to the left');
}