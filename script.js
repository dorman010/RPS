function computerPlay(compChoice) {

    return compChoice[Math.floor(Math.random()*compChoice.length)]
}
var compChoice = ['Rock','Paper','Scissors']
console.log(computerPlay(compChoice))