let coin = document.getElementById("coin")
let tossButton = document.getElementById("tossButton")
let startButton = document.getElementById("startButton")
let playerGuess
let roundsWon = 0
let wrongGuesses = 0
// win state
winGame = function () {
  document.getElementById("tossButton").style.display = "none"
  document.getElementById("callButtons").style.display = "none"
  document.getElementById("h1").textContent = "GAME OVER"
  alert("Congratulations COIN MASTER - you've WON the game!")
  
}
//lose state

loseGame = function () {
  document.getElementById("tossButton").style.display = "none"
  document.getElementById("callButtons").style.display = "none"
  document.getElementById("h1").textContent = "GAME OVER"
  alert(
    "GAME OVER - You made too many wrong guesses and lost. Reload the page to reset and play again."
  )
}

//initiate game - upon clicking begin, game instuctions disappear and guess buttons are displayed

startButton.onclick = function () {
  document.getElementById("startButton").style.display = "none"
  document.querySelector("#intro").style.display = "none"
  document.getElementById("callButtons").style.display = "inline-block"
  document.getElementById("h1").innerHTML =
    "Feeling Lucky?"
  
}

//once the player makes their call guess, record it in variable and show the toss coin button

let callHeads = document.getElementById("callHeads")
let callTails = document.getElementById("callTails")

/////PLAYER GUESS///////
//when heads button or tails button is clicked, the player guess is recorded; both guess buttons disappear; Toss button appears
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


////////////COIN TOSS/////////////////
//Define the  toss coin function, then initiate tossTime click event to call toss function
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
  /////CHECK GUESS////////// against toss outcome and notify player if round won or lost
  //If they guess correctly there's two options, they win and can guess again. increment points
  if (tossResult == playerGuess) {
    roundsWon++
    console.log("rounds won:" + roundsWon)
    if (roundsWon < 2) {
      setTimeout(() => {
        alert(
          "Great guesswork! You've now won " +
            roundsWon +
            " out of 3 rounds! Try your luck and toss again!"
        )
      }, 2000)
    } else if (roundsWon >= 2) {
      winGame()
      
    }

    //If guessed wrong, notify player, increment lost round, and take player back a step to place a new guess--heads/tails.
    // Replace TossTime with the guess / call buttons to restart a new round
  } else {
    setTimeout(() => {
      alert(
        "Incorrect guess--You lost this round! You have ONE more chance, so make this guess good!"
      )
    }, 2000)
    wrongGuesses++
    console.log("rounds lost:" + wrongGuesses)
    if (wrongGuesses > 1) {
      loseGame()
    }
  }
  //Transition between Rounds - Tally results and reset buttons/h1 for new guess
  console.log("playerGuess is " + playerGuess)
  console.log("toss result is " + tossResult)
  document.getElementById("tossButton").style.display = "none"
  document.getElementById("callButtons").style.display = "inline-block"
}
//
tossButton.onclick = function () {
  tossCoin()
}
