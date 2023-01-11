/**
 Rule Validator of the game.
 */
 function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'You Win! Scissor beats Paper';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'You Win! Rock beats Scissor';
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You Lose! Paper beats Rock';
    }
    else if (computerSelection === 'scissor' && playerSelection === 'paper') {
        return 'You Lose! Scissor beats Paper';
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissor') {
        return 'You Lose! Rock beats Scissor';
    }
    else {
        return 'Tie';
    }
}



/**
The computer's choice.
 */
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const selection = Math.floor(Math.random() *choices.length);
    return choices[selection];
}



let playerChoice;
let playersScore = 0;
let compScore = 0;
let rounds = 0;

let h3 = document.querySelector('h3');
let scoreUpdate = document.querySelectorAll('#score div');


const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        
        checkWinner();
        rounds++;
        playerChoice = btn.id;
        const compChoice = getComputerChoice();

        const res = playRound(playerChoice, compChoice);
        if (res.includes('Lose!')) {
            h3.textContent = res;
            compScore++;
            scoreUpdate[0].textContent = `Score: ${compScore}`;
        }
        else if (res.includes('Win!')) {
            h3.textContent = res;
            playersScore++;
            scoreUpdate[1].textContent = `Score: ${playersScore}`;
        }
        h3.textContent = res;
    })
})



function checkWinner() {
    if (compScore === 5) {
        alert('Computer has kicked your ASS!');
        location.reload();
    } else if (playersScore === 5) {
        alert('You are a WINNER!');
        location.reload();
    }
}


