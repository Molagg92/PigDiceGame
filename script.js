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
    checkLastRoll()
    if (checkLastRoll() === 1) {
        clearArray(scoreArray)
        changeTurn()
    }else if (checkLastRoll() === 0) {
        sumArray(scoreArray)
        changeTurn()
        clearArray(scoreArray)
    }

    console.log(`Player One is ${Player1.turnStatus}`)
    console.log(`Player Two is ${Player2.turnStatus}`)
    console.log(scoreArray)
}

// Adds zero to round array when you click hold
function holdRound() {
    scoreArray.push(0)
    console.log((scoreArray)) 
    console.log(checkLastRoll()) 
    changeTurn() 
}

// Function to check last item of score Array
function checkLastRoll() {
    const lastNum = scoreArray.slice(-1)[0]
    return lastNum
}

// Function sums all items in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
    } 
    return sum 
}

// Function that empties all items inside array
function clearArray(arr) {
    arr.length = 0; 
}

// Function to change turn of player
function changeTurn() {
    if (Player1.getStatus() === true && Player2.getStatus() === false) {
        Player1.turnStatus = false
        Player2.turnStatus = true 
    } else if (Player1.getStatus() === false && Player2.getStatus() === true) {
        Player1.turnStatus = true
        Player2.turnStatus = false
    } 
}





// Player class and methods

class Player {
    constructor(turnStatus) {
        this.turnStatus = turnStatus
    } 

    getStatus = () => {
        return this.turnStatus 
    }
}

let Player1 = new Player(true)

let Player2 = new Player(false)



// UI Logic

// roll btn player1
const rollBtn = document.getElementById("roll-btn")
rollBtn.addEventListener("click", playRound)

// hold btn player1
const holdBtn = document.getElementById("hold-btn")
holdBtn.addEventListener("click", holdRound)