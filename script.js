let coin = document.getElementById("coin")
let button = document.getElementById("button")
let heads = 0
let tails = 0

function coinToss() {
  let x = Math.floor(Math.random() * 2)
  if (x === 0) {
    coin.innerHTML =
      '<img class="heads animate-coin" src="https://lenadesign.org/wp-content/uploads/2020/06/head.png?w=100"/>'
    heads += 1
  } else {
    coin.innerHTML =
      '<img class="tails animate-coin" src="https://lenadesign.org/wp-content/uploads/2020/06/tail.png?w=100"/>'
    tails += 1
  }
}

button.onclick = function () {
  coinToss()
}
