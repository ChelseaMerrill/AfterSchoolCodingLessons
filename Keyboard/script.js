const letters = document.querySelectorAll('.letter');
const allButtons = document.querySelectorAll('.button');
const screen = document.querySelector('#screen');
const del = document.querySelector('#clear');
const space = document.querySelector('#space');

function inputChange (event){
  const targetEl = event.target;
  const buttonText = targetEl.innerText;
  screen.innerText += buttonText
};

function addAllEventListeners (arr) {
  for (let i = 0; i <arr.length; i++){
    arr[i].addEventListener('click', inputChange)
  }
}
addAllEventListeners(letters);
                                             
function deleteAll () {
  screen.innerText = '  '
}  
del.addEventListener( 'click', deleteAll);

function spaceBar() {
  screen.innerText += '_'
}
space.addEventListener( 'click', spaceBar);