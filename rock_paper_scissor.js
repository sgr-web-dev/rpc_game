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
    const computerMove = (randomNumber<1/18)?'Rock':(randomNumber<2/18)?'Paper':(randomNumber<3/18)?'Scissor':(randomNumber<4/18)?'Paper':(randomNumber<5/18)?'Scissor':(randomNumber<6/18)?'Paper':(randomNumber<7/18)?'Scissor':(randomNumber<8/18)?'Rock':(randomNumber<9/18)?'Scissor':(randomNumber<10/18)?'Rock':(randomNumber<11/18)?'Paper':(randomNumber<12/18)?'Rock':(randomNumber<13/18)?'Scissor':(randomNumber<14/18)?'Paper':(randomNumber<15/18)?'Rock':(randomNumber<16/18)?'Paper':(randomNumber<17/18)?'Scissor':'';

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
