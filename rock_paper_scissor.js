let scoreBoard = JSON.parse(localStorage.getItem('saveResult'))||{wins: 0, looses: 0, ties: 0};
displayResult();

function resetScore(){
  scoreBoard = {wins: 0, looses: 0, ties: 0};
  localStorage.removeItem('saveResult');
  displayResult();
  document.querySelector('.js-game-result').innerHTML = '';
  document.querySelector('.js-computermove-playermove').innerHTML = '';
}

 function playGame(playerMove){   
  const randomNumber = Math.random();
  const computerMove = (randomNumber<1/3)?'Rock':(randomNumber<2/3)?'Paper':'Scissor';

let result='';
  if(playerMove==='Rock'){
  result = (computerMove==='Rock')?'Tie':(computerMove==='Paper')?'You Lose':'You Win';
  }
  else if(playerMove==='Paper'){
    result = (computerMove==='Paper')?'Tie':(computerMove==='Scissor')?'You Lose':'You Win';
  }
  else if(playerMove==='Scissor'){
    result = (computerMove==='Scissor')?'Tie':(computerMove==='Rock')?'You Lose':'You Win';
  }  

  if(result==='Tie'){
    scoreBoard.ties+=1;
  }
  else if(result==='You Win'){
    scoreBoard.wins+=1;
  }
  else if(result==='You Lose'){
    scoreBoard.looses+=1;
  }

  localStorage.setItem('saveResult',JSON.stringify(scoreBoard));

  document.querySelector('.js-game-result').innerHTML = result;
  document.querySelector('.js-computermove-playermove').innerHTML = `You
  <img src="./rock_paper-scissor_images/${playerMove}-emoji.png" class="ply-move">
  <img src="./rock_paper-scissor_images/${computerMove}-emoji.png" class="ply-move">
  Computer`;

  displayResult();
 }

function displayResult(){
 let displayResult = document.querySelector('.js-display-score');
 displayResult.innerHTML = `Wins: ${scoreBoard.wins}, Losses: ${scoreBoard.looses}, Ties: ${scoreBoard.ties} `;
}
