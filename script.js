// Business Logic --

// Game functions

// Initialize Global Variables
let player1Score = 0
let player2Score = 0
let scoreArray = [] 
let roundPool = document.getElementById("roundPool")

let p1ScoreBoard = document.getElementById("player1ScoreBoard");
let p2ScoreBoard = document.getElementById("player2ScoreBoard");

let p1TurnChecker = document.getElementById("p1TurnCheck");
let p2TurnChecker = document.getElementById("p2TurnCheck");


let winnerPage = document.getElementById("winnerPage")
let chickenDinner = document.getElementById("chickenDinner")

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
			console.log("Nat 1")	
    } 
		 
		let sum = sumArray(scoreArray);
		roundPool.innerText = " + " + sum;

    console.log(`Player One is ${Player1.turnStatus}`)
    console.log(`Player Two is ${Player2.turnStatus}`)
    console.log(scoreArray)
}

// Adds zero to round array when you click hold
function holdRound() {
    scoreArray.push(0)
   checkLastRoll()
    if (checkLastRoll() === 0 && Player1.turnStatus === true) {
			player1Score += sumArray(scoreArray)
			p1ScoreBoard.innerText = player1Score;
		  clearArray(scoreArray)	
			console.log(scoreArray)
			changeTurn()
			console.log("Player 1 HOLDS!")
    } else if (checkLastRoll() === 0 && Player2.turnStatus === true){
			player2Score += sumArray(scoreArray)
			p2ScoreBoard.innerText = player2Score;
		  clearArray(scoreArray)	
			console.log(scoreArray)
			changeTurn()
			console.log("Player 2 HOLDS!")
    }
		if (player1Score >= 10) {
			console.log("Winner Winner Chicken Dinner")
			winnerPage.innerText = "1st Player: " + player1Score;
			chickenDinner.removeAttribute("class");

		}else if (player2Score >= 10){
			console.log("Winner Winner Chicken Dinner")
			console.log("2nd Player: " + player2Score)
			winnerPage.innerText = "2nd Player: " + player2Score;
			chickenDinner.removeAttribute("class");
		}
		roundPool.innerText = " + " + 0
		console.log(`Player One is ${Player1.turnStatus}`)
    console.log(`Player Two is ${Player2.turnStatus}`)
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
				p1TurnChecker.innerText = ""
				p2TurnChecker.innerText = "Roll!"
				
    } else if (Player1.getStatus() === false && Player2.getStatus() === true) {
        Player1.turnStatus = true
        Player2.turnStatus = false
				p1TurnChecker.innerText = "Roll!"
				p2TurnChecker.innerText = ""
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
p1TurnChecker.innerText = "Roll!"
let Player2 = new Player(false)



// UI Logic



// roll btn 
const rollBtn = document.getElementById("roll-btn")
rollBtn.addEventListener("click", playRound)

// hold btn 
const holdBtn = document.getElementById("hold-btn")
holdBtn.addEventListener("click", holdRound)


