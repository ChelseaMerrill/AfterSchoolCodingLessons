const letters = document.querySelectorAll('.letter');
const screen = document.querySelector('#screen');
const allButtons = document.querySelectorAll('.button');
const del = document.querySelector('#clear');
const space = document.querySelector('#space');


function inputChange (event){
    const targetE1 = event.target;
    const buttonText = targetE1.innerText;
    screen.innerText += buttonText
}


function addAllEventListeners(arr){
    for(let i=0; i <arr.length; i++){
        arr[i].addEventListener('click', inputChange)
    }
}
addAllEventListeners(letters)



function deleteBox (){
    screen.innerText=''
}
del.addEventListener('click', deleteBox)


function spaceBar (){
    screen.innerText += '_'
}
space.addEventListener('click', spaceBar)
