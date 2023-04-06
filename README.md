Test:
Code:
Expected Output:

----------------------

Describe: generateRoll()
Test:should return a random number between 1-6
Code:GenerateRoll()
Expected Output: random integer beteween 1-6

----------------------
Describe: function playRound()
Test:should store the result of GenereteRoll() inside an array.
Code: scoreArray.push(num)
Expected Output:

----------------------
Describe: function sumArray(arr)
Test:should return the sum of the numbers in our array.
Code: sumArraey(arr){for loop, sum += [i]. return sum }
Expected Output:[1, 2] = 3!

----------------------

Description: function holdRound() 
Test:should push 0 onto scoreArray, wich will call  sumArray() on scoreArray, giving the active players variable the sum total
Code: function holdROund() { ------ ------- sumArray(scoreArray)}
Expected Output:[2, 2] holdround() reutrns 4

----------------------


Test: should write an if statemnt that checks if the sum of our total player scroe is equal too or greater than 100, wich is the winning score of the game.
Code: holdRound() >= 100 
Expected Output: clearAray, hide loosing players img, display image displaying victory.

----------------------

Test: should rewrite the function a lil bit , as to include the second player, and account for which boolean is true, and which plaayer score vaiable to add the round pool into
Code:holdRound() [during player2's turn]
Expected Output:player2Score working

----------------------

Describe: playScoreBoards
Test:will make html elements that will display the current score of each player
Code:
Expected Output: