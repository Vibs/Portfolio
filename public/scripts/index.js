
const divInterchangable = document.getElementById('interchangable');

const interchangableWords = ['HTML', 'CSS', 'JSON', 'JAVA', 'PYTHON'];



let index = 0;

function changeText() {
    divInterchangable.innerHTML = interchangableWords[index]
    if (index < interchangableWords.length - 1) {
        index++;
    } else {
        index = 0;
    }
}

setInterval(changeText, 1000);

