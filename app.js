let options = ['rock', 'paper', 'scissors'];

function computerPlay(options){
    let rnd = Math.floor(Math.random()*3);
    return options[rnd];
}

function playRound(computerPlay){
    let playerSelection = prompt('Rock, Paper, Scissors ?');
    let computerSelection = computerPlay(options);
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        alert('You win ! Rock beats scissors');
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        alert('You lose ! Paper beats rock');
    }else if (playerSelection === 'rock' && computerSelection === 'rock'){
        alert ('Tie !');
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        alert('You win ! Paper beats rock.');
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        alert('You lose ! Scissors beats paper.');
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        alert('Tie !');
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        alert('You win ! Scissors beats paper ');
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        alert('You lose! Rock beats scissors');
    }else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        alert('Tie !');
    }
}

function game(playRound){
    for(let i = 0; i<5; i++){
        playRound(computerPlay);
    }
}

game(playRound);