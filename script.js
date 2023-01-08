const playerMarks = ['x','o','x','o','x','o','x','o','x','o'];

const slot = document.querySelectorAll('.slot');

const slots = Array.from(slot);
const addMark = function(e) {e.target.textContent = 't'};


slots.forEach(function(element){
    element.addEventListener('click', addMark)
})


