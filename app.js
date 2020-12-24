const computerOptions = ['rock', 'paper', 'scissors'];
const btns = document.querySelectorAll('.selection');
const informWinLose = document.querySelector('#inform').firstElementChild;
const playerScoreText = document.querySelector('#results').firstElementChild;
const computerScoreText = document.querySelector('#results').lastElementChild;
const afterGame = document.querySelector('#after-game');
const afterGameBtns = document.querySelectorAll('.after-game-selection');
let playerScore = 0;
let computerScore = 0;

btns.forEach( btn => btn.addEventListener('click', function (e){
    this.style.borderColor = "rgba(205,169,19,1)";
    let playerSelection = this.dataset.value;
    let rnd = Math.floor(Math.random()*3);
    let computerSelection = computerOptions[rnd];
    console.log(`Your selection is ${playerSelection} and computer selection is ${computerSelection}`);
    let playerWin;
    let tie = false;

    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        informWinLose.textContent='Score ! Rock beats scissors';
        playerWin = true;
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        informWinLose.textContent= 'Computer score ! Paper beats rock';
        playerWin = false;
    }else if (playerSelection === 'rock' && computerSelection === 'rock'){
        informWinLose.textContent= 'Tie !';
        playerWin = false;
        tie = true;
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        informWinLose.textContent = 'Score ! Paper beats rock.';
        playerWin = true;
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        informWinLose.textContent = 'Computer score ! Scissors beats paper.'; 
        playerWin = false;
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        informWinLose.textContent = 'Tie !';
        playerWin = false;
        tie = true;
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        informWinLose.textContent = 'Score ! Scissors beats paper ';
        playerWin = true;
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        informWinLose.textContent = 'Computer score! Rock beats scissors'; 
        playerWin = false;
    }else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        informWinLose.textContent = 'Tie !'; 
        playerWin = false;
        tie = true;
    }

    if(playerWin && !tie){
        playerScore++;
        playerScoreText.textContent = `Your score : ${playerScore}`;
    }else if(!playerWin && !tie){
        computerScore++;
        computerScoreText.textContent = `${computerScore} : Computer score`;
    }    

    if(playerScore == 5 || computerScore == 5){
        afterGame.style.top = '10vh';
        document.querySelector('#title').style.filter = 'blur(10px)';
        document.querySelector('#results').style.filter = 'blur(10px)';
        document.querySelector('.container-buttons').style.filter = 'blur(10px)';
        document.querySelector('#inform').style.filter = 'blur(10px)';
        (playerScore == 5) ? afterGame.firstElementChild.textContent  = `YOU WIN !!` : afterGame.firstElementChild.textContent  = `YOU LOSE !!` ;

        afterGameBtns.forEach( btn => btn.addEventListener('click', function (){
            this.style.borderColor = "rgba(205,169,19,1)";
            if (this.dataset.value == 'yes'){
                afterGame.style.top = '-500px';
                document.querySelector('#title').style.filter = '';
                document.querySelector('#results').style.filter = '';
                document.querySelector('.container-buttons').style.filter = '';
                document.querySelector('#inform').style.filter = '';
                afterGame.firstElementChild.textContent  = '' ;
                playerScore = 0;
                computerScore = 0;
                playerScoreText.textContent = `Your score : ${playerScore}`;
                computerScoreText.textContent = `${computerScore} : Computer score`;
                informWinLose.textContent = '';
            }
        }));

    }

}));

btns.forEach( btn => btn.addEventListener('transitionend', function(e){
    if(e.propertyName === 'border-bottom-color'){
        this.style.borderColor = 'black';
    }
}));

afterGameBtns.forEach( btn => btn.addEventListener('transitionend', function(e){
    if(e.propertyName === 'border-bottom-color'){
        this.style.borderColor = 'black';
    }
}));

console.log(playerScore);

//Below is the previous version of the game without UI and event listeners.

//let options = ['rock', 'paper', 'scissors'];

//function computerPlay(options){
//let rnd = Math.floor(Math.random()*3);
//    return options[rnd];
//}

//function playRound(computerPlay){
//    let playerSelection = prompt('Rock, Paper, Scissors ?');
//    let computerSelection = computerPlay(options);
//    playerSelection = playerSelection.toLowerCase();
//    
//    if (playerSelection === 'rock' && computerSelection === 'scissors'){
//        alert('You win ! Rock beats scissors');
//    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
//        alert('You lose ! Paper beats rock');
//    }else if (playerSelection === 'rock' && computerSelection === 'rock'){
//        alert ('Tie !');
//    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
//        alert('You win ! Paper beats rock.');
//    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
//        alert('You lose ! Scissors beats paper.');
//    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
//        alert('Tie !');
//    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
//        alert('You win ! Scissors beats paper ');
//    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
//        alert('You lose! Rock beats scissors');
//    }else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
//        alert('Tie !');
//    }
//}

//function game(playRound){
//    for(let i = 0; i<5; i++){
//        playRound(computerPlay);
//    }
//}

//game(playRound);