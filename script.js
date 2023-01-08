const playerMarks = ['x','o','x','o','x','o','x','o','x','o'];

const slot = document.querySelectorAll('.slot');

const slots = Array.from(slot);
const addMark = function(e) {
    e.target.textContent = markAlternator(playerMarks);
    e.target.removeEventListener('click', addMark);
};


slots.forEach(function(element){
    element.addEventListener('click', addMark)
})

// Adds x and o alternatively 
let counter = 0;
const markAlternator = function (array) {
    let _mark = array[counter];
    counter += 1;
    return _mark
}

