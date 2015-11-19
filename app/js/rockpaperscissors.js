////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`. If a `move` has a value, your expression should evaluate to that value.
    //
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
var m1;
    if (move != null)
    {
      m1 = move;
    }
    else
    {
      m1 = getInput();
    }
    return m1;
}
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
var m2;
    if (move != null)
    {
      m2 = move;
    }
    else
    {
      m2 = randomPlay();
    }
    return m2;
    }
}

function getWinner(m1,m2) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var oc = m1 + '/' + m2;
    switch (oc){
      case 'rock/paper':
              winner = 'computer';
              break;
      case 'rock/scissors':
              winner = 'player';
              break;
      case 'paper/scissors':
              winner = 'computer';
              break;
      case 'paper/rock':
              winner = 'player';
              break;
      case 'scissors/rock':
              winner = 'computer';
              break;
      case 'scissors/paper':
              winner = 'player';
              break;
        default:
        winner = 'tie';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var pw = 0;
    var cw = 0;
    var ts = 0;
    for (var tw = 0; tw <= 5; tw +=1)
    {

    }
    return [playerWins, computerWins];
}
