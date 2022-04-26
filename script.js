let rpsComp = ['Rock', 'Paper', 'Scissors'];

function computerPlay(arr){
    const random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random)
    return random;
}

computerPlay(rpsComp)

let playerChoice = prompt('Rock, paper or scissors?')
console.log(playerChoice);