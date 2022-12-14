# Overview

Coin Toss is a DOM based coin toss game of Heads or Tails built with HTML, CSS and JavaScript

Requirements were that the game must:

be a two player game (either against the computer or against another player)

contain a win state - a way for the player to win the game

contain a lose state - a way for the player to lose the game

A way to keep playing if the game is not over

Multiple rounds to play - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost

# Game Instructions

In this game, the player selects their guess--either heads or tails and then clicks "Toss Time!" to reveal the outcome. The computer checks the players guess against the outcome and communicates a win or loss for that round. The game has a maximum of three rounds. Two correct guesses out of three wins the game. Two wrong guesses loses the game-- meaning the computer wins. 

Where to play: https://kfonge.github.io/Coin_Toss/

# Technologies Used

HTML, CSS, Javascript

The main programming elements used in this project were:

1. The Math.random function to randomize the toss outcome
2. Buttons and click events to move us through the stages of the game
3. CSS animation to make the coin image rotate as a click event

# Challenges Encountered

I struggled with finding a balance as I seperated out the rounds for this project. That is---- deciding whether to embed my logic in if statements chronologically or to create several seperate functions to begin rounds. 

I also struggled with figuring out how to control the alert messages--not showing up too soon even with the time outs. At the current stage of the game, for some rounds the order is correct, but for others, the final game outcome notification pops up before the coin animation runs

# Future Developments

With more time, I would like to make the game more interactive by adding:

1. Sound effects to make the game a little more fun/dynamic 
2. A thumb-flick or other animation features to making the toss event more 3-D
3. A way to statically display the rounds and score on the page instead of using alerts
4. A menu for players to choose a differnt coin to customize their game experience
5. Use modal for endgame and potentially for reset

