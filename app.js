//INITIALIZATION OF VARIBLES
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
let result = document.querySelector('#result');
let userScore = document.querySelector('#user');
let computerScore = document.querySelector('#computer');
let userCounter = 0;
let computerCounter = 0;
let playerMove;
let computerMove;
let loser;
let isTie;
//END

//CHOOSE COMPUTER MOVE
function getComputerMove(){
const moves = ['rock','paper','scissor'];
computerGenerated = moves[Math.floor(Math.random() * 3)];
return computerGenerated;
}
//END


function main(){
  rock.addEventListener('click', function(){
    winner('rock');
    if(loser){
      setTimeout(()=>{
        rock.style.borderColor = "red";
      }, 10);
      setTimeout(()=>{
        rock.style.borderColor = "orange";
      }, 500);
    }else if(isTie){
      setTimeout(()=>{
        rock.style.borderColor = "gray";
      }, 10);
      setTimeout(()=>{
        rock.style.borderColor = "orange";
      }, 500);
    }else{
      setTimeout(()=>{
        rock.style.borderColor = "green";
      }, 10);
      setTimeout(()=>{
        rock.style.borderColor = "orange";
      }, 500);
    }
  });

  paper.addEventListener('click', function(){
    winner('paper');
    if(loser){
      setTimeout(()=>{
        paper.style.borderColor = "red";
      }, 10);
      setTimeout(()=>{
        paper.style.borderColor = "orange";
      }, 500);
    }else if(isTie){
      setTimeout(()=>{
        paper.style.borderColor = "gray";
      }, 10);
      setTimeout(()=>{
        paper.style.borderColor = "orange";
      }, 500);
    }else{
      setTimeout(()=>{
        paper.style.borderColor = "green";
      }, 10);
      setTimeout(()=>{
        paper.style.borderColor = "orange";
      }, 500);
    }

  });

  scissor.addEventListener('click', function(){
    winner('scissor');
    if(loser){
      setTimeout(()=>{
        scissor.style.borderColor = "red";
      }, 10);
      setTimeout(()=>{
        scissor.style.borderColor = "orange";
      }, 500);
    }else if(isTie){
      setTimeout(()=>{
        scissor.style.borderColor = "gray";
      }, 10);
      setTimeout(()=>{
        scissor.style.borderColor = "orange";
      }, 500);
    }else{
      setTimeout(()=>{
        scissor.style.borderColor = "green";
      }, 10);
      setTimeout(()=>{
        scissor.style.borderColor = "orange";
      }, 500);
    }
  });
}
//END

function winner(pMove){
  playerMove = pMove;
  computerMove = getComputerMove();
  if(playerMove === computerMove){
    result.innerHTML = "<h1>It's a Tie!</h1>";
    isTie = true;
  } else if(playerMove === 'rock' && computerMove === 'scissor'){
    result.innerHTML = "<h1>You Win!</h1>";
    loser = false;
    isTie = false;
    userCounter++;
    userScore.innerHTML = userCounter;
  } else if(playerMove === 'paper' && computerMove === 'rock'){
    result.innerHTML = "<h1>You Win!</h1>";
    loser = false;
    isTie = false;
    userCounter++;
    userScore.innerHTML = userCounter;
  } else if(playerMove === 'scissor' && computerMove === 'paper'){
    result.innerHTML = "<h1>You Win!</h1>";
    loser = false;
    isTie = false;
    userCounter++;
    userScore.innerHTML = userCounter;
  } else{
    result.innerHTML = "<h1>Computer Wins!</h1>";
    computerCounter++;
    computerScore.innerHTML = computerCounter;
    loser = true;
    isTie = false;
    return loser;
  }
}


main();
