const playerMarks = ['x','o','x','o','x','o','x','o','x','o'];
const slot = document.querySelectorAll('.slot');
const slots = Array.from(slot);
const resetButton = document.querySelector('.reset');

let gameBoardArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];


const addMark = function(e) {
    e.target.textContent = markAlternator(playerMarks);
    let currentTextContent = e.target.textContent;
    e.target.removeEventListener('click', addMark);
    let currentSlotString = e.target.className;
    
    const currentSlotNumberGetter = function (slotString) {
       return slotString.slice(-1);
    }
    
    let currentSlotNumber = currentSlotNumberGetter(currentSlotString);
    console.log(currentSlotNumber);

    const arrayWriter = function (number) {
        gameBoardArray[number] = currentTextContent;
    }

    arrayWriter(currentSlotNumber);

    //check win condition

    const checkForWin = function (array){
        if (array[1] === array[0] && array[1] === array[2]) {alert('u win bro')}
        else if (array[4] === array[3] && array[4] === array[5]) {alert('u win bro')}
        else if (array[7] === array[6] && array[7] === array[8]) {alert('u win bro')}
        else if (array[3] === array[0] && array[3] === array[6]) {alert('u win bro')}
        else if (array[4] === array[1] && array[4] === array[7]) {alert('u win bro')}
        else if (array[5] === array[2] && array[5] === array[8]) {alert('u win bro')}
        else if (array[4] === array[0] && array[4] === array[8]) {alert('u win bro')}
        else if (array[4] === array[6] && array[4] === array[2]) {alert('u win bro')};

    }

    checkForWin(gameBoardArray);

};


const initialListenerState = function () {slots.forEach(function(element){
    element.addEventListener('click', addMark)
})};
initialListenerState();

const resetLogic = function (){
    slots.forEach(element => {element.textContent = ''});
    initialListenerState();
    counter = 0;
    gameBoardArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
}

// Adds x and o alternatively 
let counter = 0;
const markAlternator = function (array) {
    let _mark = array[counter];
    counter += 1;
    return _mark
}

resetButton.addEventListener('click', resetLogic);


