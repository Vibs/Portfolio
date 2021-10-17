const divChangingWord = document.getElementById('changing-word');
let mainContentWrapper;

document.addEventListener('DOMContentLoaded', function () {
    mainContentWrapper = document.getElementById('main-content-wrapper');
    addMeSection();
});

const words = ['Java', 'Spring', 'HTML', 'css', 'Thymeleaf', 'Javascript', 'Node.js', 'python', 'C#', 'GRASP', 'Scrum', 'UML', 'SQL', 'Git'];
let index = 0;

function changeText() {
    divChangingWord.innerHTML = words[index].toUpperCase()
    if (index < words.length - 1) {
        index++;
    } else {
        index = 0;
    }
}

setInterval(changeText, 1000);



function addMeSection() {

    const contentGroup = createContentGroup();

    contentGroup.appendChild(createHeadline('Vibe Helene Jensen'));
    contentGroup.appendChild(createText(
        'Hej! Jeg hedder Vibe, og jeg er datamatikerstuderende på fjerde semester. ' + 
        'Her på siden kan du læse om nogle af de ting jeg har lært på studiet, og under Kursus-fanen kan du se de kurser jeg har taget.<br>' +
        'Under Portfolio-fanen kan du også se nogle af de projekter, jeg har lavet.')
    );

    /* ITALIC tekst
    const divItalicText = createText('Noget vigtigt italic tekst!<br>');
    divItalicText.classList.add('italics');
    contentGroup.appendChild(divItalicText);
    */

    mainContentWrapper.insertBefore(contentGroup, document.getElementById('contact'));
    mainContentWrapper.insertBefore(createLargeBorder(), document.getElementById('contact'));
}



