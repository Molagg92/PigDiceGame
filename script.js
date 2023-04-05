// Business Logic --

// Game functions

let scoreArray = []
function playRound() {
    const num = generateRoll()
    scoreArray.push(num)
    console.log(scoreArray) 
}




// Function generates random number between 1 - 6 returns value
function generateRoll() {
let num = Math.floor(Math.random() * 6) + 1   
// return Math.round(num)
return num
}








// Player class and methods

class Player {
    constructor(totalScore, roundScore, turnStatus) {
        this.totalScore = totalScore;
        this.roundScore = roundScore;
        this.turnStatus = turnStatus;


    }
}

// UI Logic

// roll btn player1
const rollBtn = document.getElementById("roll-btn")
rollBtn.addEventListener("click", playRound)
