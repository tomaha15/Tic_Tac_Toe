const playerMarks = ['x','o','x','o','x','o','x','o','x','o'];
const slot = document.querySelectorAll('.slot');
const slots = Array.from(slot);
const resetButton = document.querySelector('.reset');

let gameBoardArray = new Array(9);


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
};


const initialListenerState = function () {slots.forEach(function(element){
    element.addEventListener('click', addMark)
})};
initialListenerState();

const resetLogic = function (){
    slots.forEach(element => {element.textContent = ''});
    initialListenerState();
    counter = 0;

}

// Adds x and o alternatively 
let counter = 0;
const markAlternator = function (array) {
    let _mark = array[counter];
    counter += 1;
    return _mark
}

resetButton.addEventListener('click', resetLogic);