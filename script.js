confirm("Welcome to Heads or Tails. Best guess 2/3 Wins!")
prompt("Player 1, It's your turn to guess: HEADS or TAILS?")


let coin = document.getElementById("coin")
let button = document.getElementById("button")
let heads = 0
let tails = 0

function tossCoin() {
  let num = Math.floor(Math.random() * 2)
  if (num === 0) {
    coin.innerHTML =
      '<img class="heads animate-coin" src="https://www.pngegg.com/en/png-tfwff"/>'
    heads += 1
  } else {
    coin.innerHTML =
      '<img class="tails animate-coin" src="https://www.pngegg.com/en/png-ehiid"/>'
    tails += 1
  }
}

button.onclick = function () {
  tossCoin()
}
