(function rockPaperScissor(){
  function determineComp(num){
    if(num > 1){
      return 'rock'
    }else if(num > 2){
      return 'papaer'
    }else {
      return 'scissor';
    }
  }
  let playerOne = prompt('Choose one rock : Paper : scissor');
  let player = ['rock', 'paper', 'scissors'];

  let playerTwo = determineComp(Math.floor(Math.random() * 3));
  if(playerOne === playerTwo){
    console.log('ITS A TIE!!!')
  }


  if(playerOne == 'paper' && playerTwo == 'rock'){
    console.log('PLAYER ONE WINS');
  }
  else if(playerTwo === 'paper' && playerOne === 'rock') {
    console.log('PLAYER TWO WINS')
  }


  if(playerOne === 'scissor' && playerTwo === 'paper'){
    console.log('PLAYER ONE WINS:');
  }
  else if(playerTwo === 'scissor' && playerOne === 'paper'){
    console.log('PLAYER TWO WINS')
  }


  if(playerOne === 'rock' && playerTwo === 'scissor'){
    console.log('PLAYER ONE WINS');
  }
  else if(playerTwo === 'rock' && playerOne === 'scissor'){
    console.log('PLAYER TWO WINS')
  }
})()
