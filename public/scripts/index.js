let divChangingWord = document.getElementById('changing-word');

document.addEventListener('DOMContentLoaded', function () {

});

const words = ['JAVA', 'SPRING', 'HTML', 'CSS', 'JAVASCRIPT', 'NODE.JS', 'PYTHON', 'C#'];
let index = 0;

function changeText() {
    divChangingWord.innerHTML = words[index]
    if (index < words.length - 1) {
        index++;
    } else {
        index = 0;
    }
}


setInterval(changeText, 1000);



