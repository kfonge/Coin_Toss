let coin = document.getElementById("coin")
let tossButton = document.getElementById("tossButton")
let startButton = document.getElementById("startButton")
let playerGuess
let roundsWon = 0
let wrongGuesses = 0
//initiate game - upon clicking begin, game instuctions disappear and guess buttons are displayed

startButton.onclick = function () {
  document.getElementById("startButton").style.display = "none"
  document.querySelector("#intro").style.display = "none"
  document.getElementById("callButtons").style.display = "inline-block"
  // document.getElementById("callTails").style.display = "inline-block";
}

//once the player makes their call or guess, record it in variable and show the toss coin button
//

let callHeads = document.getElementById("callHeads")
let callTails = document.getElementById("callTails")

//when heads button is clicked, the player guess is recorded as heads and both guess buttons disappear
callHeads.onclick = function () {
  playerGuess = "HEADS"
  callButtons.style.display = "none"
  document.getElementById("tossButton").style.display = "inline-block"
  console.log("playerGuess is " + playerGuess)
}

callTails.onclick = function () {
  playerGuess = "TAILS"
  callButtons.style.display = "none"
  document.getElementById("tossButton").style.display = "inline-block"
  console.log("playerGuess is " + playerGuess)
}

//finally with the guess recorded, initiate TossTime click event to call toss function

//Define the central toss coin function before its called at 72
function tossCoin() {
  let num = Math.floor(Math.random() * 2)
  let tossResult

  // for (i = 0; i < 2; i++) {
  if (num === 0) {
    //toss result is heads, display the heads coin image
    tossResult = "HEADS"
    coin.innerHTML =
      '<img class="heads animate-coin" src="https://lenadesign.org/wp-content/uploads/2020/06/head.png?w=100"/>'
  } else {
    //toss result is tails, display tails image
    tossResult = "TAILS"
    coin.innerHTML =
      '<img class="tails animate-coin" src="https://lenadesign.org/wp-content/uploads/2020/06/tail.png?w=100"/>'
  }
  //Check player's guess against outcome and Notify player
  if (tossResult == playerGuess) {
    setTimeout(() => {
      alert("Great guesswork, you won this round! Toss Again")
    }, 2000)
    roundsWon++
    console.log("rounds won:" + roundsWon)
    //display the guess/call buttons and TossTime Again
  } else {
    setTimeout(() => {
      alert("Sorry! Your guess was incorrect. Try again")
    }, 2000)
    wrongGuesses++
    console.log("rounds lost:" + wrongGuesses)
  }
  console.log("playerGuess is " + playerGuess)
  console.log("toss result is " + tossResult)
}
// 
tossButton.onclick = function () {
  tossCoin()
}

// win state

if (roundsWon >= 2) alert("Congratulations COIN MASTER - you've WON the game")
//lose state

if (wrongGuessTally > 1)
  alert(
    "GAME OVER - You made too many wrong guesses and lost. Reload the page to reset and play again."
  )
document.getElementById("tossButton").style.display = none
document.getElementsByTagName("h1").textcontent = "GAME OVER"
