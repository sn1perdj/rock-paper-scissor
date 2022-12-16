/**
 * The function getComputerChoice() returns a random choice from the array choices.
 * @returns The computer's choice.
 */
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const selection = Math.floor(Math.random() *choices.length);
    return choices[selection];
}

/**
 * It prompts the user to select from rock, paper, or scissors, and returns the selection in lowercase.
 * @returns The player's selection.
 */
function playerChoice() {
    const selection = prompt('Select from: Rock, Paper, Scissor');
    return selection.toLowerCase();
}

/**
 * If the player's selection is paper and the computer's selection is rock, the player wins. If the
 * player's selection is scissor and the computer's selection is paper, the player wins. If the
 * player's selection is rock and the computer's selection is scissor, the player wins. If the
 * computer's selection is paper and the player's selection is rock, the player loses. If the
 * computer's selection is scissor and the player's selection is paper, the player loses. If the
 * computer's selection is rock and the player's selection is scissor, the player loses.
 * @param playerSelection - The player's choice of rock, paper, or scissors.
 * @param computerSelection - a string that is either 'rock', 'paper', or 'scissors'
 * @returns The result of the game.
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
 * The game function is a while loop that runs until either the player or the computer reaches 5
 * points. 
 * 
 * The game function calls the playerChoice function to get the player's choice, and the
 * getComputerChoice function to get the computer's choice. 
 * 
 * The game function then calls the playRound function to determine the winner of the round. 
 * 
 * The game function then increments the counter for the winner of the round. 
 * 
 * The game function then prints the result of the round. 
 * 
 * The game function then repeats the while loop until either the player or the computer reaches 5
 * points. 
 * 
 * The game function then returns 0.
 * @returns the value of 0.
 */
function game() {
    let counterPlayer = 0;
    let counterComputer = 0;

    while (true) {
        if (counterPlayer === 5) {
            console.log('You Win!');
            break;
        } 
        else if ( counterComputer === 5) {
            console.log('You Lose!');
            break
        }
        else {
            let playerSel = playerChoice();
            let compSel = getComputerChoice();

            let res = playRound(playerSel, compSel);
            if (res.includes('Lose!')) {
                counterComputer++;
            }
            else if (res.includes('Win!')) {
                counterPlayer++;
            }
            console.log(res);
        }
    }
    return 0;
}