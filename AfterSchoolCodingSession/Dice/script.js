const diceOne = document.querySelector('#die1')
const diceTwo = document.querySelector('#die2')
const diceThree = document.querySelector('#die3')

function rollDOne(){
    var d1= Math.floor(Math.random() * 6) + 1;
    diceOne.innerText = d1;
}

function rollDTwo(){
    var d2= Math.floor(Math.random() * 8) + 1;
    diceTwo.innerText = d2;
}

function rollDThree(){
    var d3= Math.floor(Math.random() * 20) + 1;
    diceThree.innerText = d3;
}

  
  