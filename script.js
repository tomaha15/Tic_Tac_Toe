const playerMarks = ['x','o','x','o','x','o','x','o','x','o'];

const slot = document.querySelectorAll('.slot');

const slots = Array.from(slot);
const addMark = function(e) {e.target.textContent = markAlternator(playerMarks)};


slots.forEach(function(element){
    element.addEventListener('click', addMark)
})

let i = 0;
const markAlternator = function (array) {
    let _mark = array[i];
    console.log(i)
    i += 1;
    console.log(i)
    return _mark
}
