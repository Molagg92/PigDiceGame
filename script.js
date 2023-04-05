// Business Logic --

// Game functions

// Initialize Global Variables
let player1Score = 0
let player2Score = 0
let scoreArray = []

// Function generates random number between 1 - 6 returns value
function generateRoll() {
    let num = Math.floor(Math.random() * 6) + 1   
    // return Math.round(num)
    return num
}

// Pushes dice roll into round array
function playRound() {
    scoreArray.push(generateRoll())
    console.log(scoreArray)
    console.log(checkLastRoll())
}

// Adds zero to round array when you click hold
function holdRound() {
    scoreArray.push(0)
    console.log((scoreArray)) 
    console.log(checkLastRoll()) 
}

// Function to check last item of score Array
function checkLastRoll() {
    const lastNum = scoreArray.slice(-1)[0]
    return lastNum
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
    } 
    return sum
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

// hold btn player1
const holdBtn = document.getElementById("hold-btn")
holdBtn.addEventListener("click", holdRound)