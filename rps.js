function computerPlay() {

    let arr = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * 3);
    let selection = arr[rand]
    return selection
}
function playRound(playerSelection, computerSelection) {
    let res = '';
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            res = 'We have a tie. Both players selected ' + playerSelection;
            return res;
        }
        else if (computerSelection === 'paper') {
            res = "You Lose! Paper beats Rock";
            return res;
        }
        else {
            res = "You Win! Rock beats Scissors";
            return res;
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            res = 'We have a tie. Both players selected ' + playerSelection;
            return res;
        }
        else if (computerSelection === 'scissors') {
            res = "You Lose! Scissors beats Paper";
            return res;
        }
        else {
            res = "You Win! Paper beats Rock";
            return res;
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            res = 'We have a tie. Both players selected ' + playerSelection;
            return res;
        }
        else if (computerSelection === 'rock') {
            res = "You Lose! Rock beats Scissors";
            return res;
        }
        else {
            res = "You Win! Scissors beats Paper";
            return res;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let res = 0;
    for (let i = 0; i < 5; i++) {
        let computerSel = computerPlay()

        let playerSel = '';
        while (playerSel !== 'rock' && playerSel != 'paper' && playerSel != 'scissors') {
            playerSel = window.prompt('Make your selection: rock, paper or scissors?');
        }

        res = playRound(playerSel, computerSel)
        console.log(res);
        if (res[4] === 'W') {
            playerScore++;
            console.log('Player Score is now: ' + playerScore);
        }
        else if (res[4] === 'L') {
            computerScore++;
            console.log('Computer Score is now: ' + computerScore);
        }
    }
    if (playerScore > computerScore) {
        console.log('You Win! The score was ' + playerScore + ' to ' + computerScore);
    }
    else if (computerScore > playerScore) {
        console.log('You Lose! The score was ' + computerScore + ' to ' + playerScore);
    }
    else {
        console.log('WOW we have a tie! The score was ' + playerScore + ' to ' + computerScore);
    }

}



game();
