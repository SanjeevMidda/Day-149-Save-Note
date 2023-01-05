//user enter note
//note added to note area

let input = document.querySelector('input');
input.addEventListener('change', addNote);

let noteArea = document.querySelector('.container');

function addNote(){
    let inputValue = input.value;

    let createBox = document.createElement('div');
    createBox.classList.add('boxStyling');
    createBox.innerHTML=inputValue;

    noteArea.appendChild(createBox);
}