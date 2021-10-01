const divChangingWord = document.getElementById('changing-word');
let mainContentWrapper;

document.addEventListener('DOMContentLoaded', function () {
    mainContentWrapper = document.getElementById('main-content-wrapper');
    addTestSection();
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



function addTestSection() {

    const contentGroup = createContentGroup();

    addHeadline('TEST', contentGroup);

    mainContentWrapper.insertBefore(contentGroup, document.getElementById('contact'));
    mainContentWrapper.insertBefore(createContentGroupBorder(), document.getElementById('contact'));
}



