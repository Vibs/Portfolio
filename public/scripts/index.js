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

    contentGroup.appendChild(createHeadline('Vibe Helene Jensen'));
    contentGroup.appendChild(createText(
        'Hej! Jeg hedder Vibe, og jeg er datamatikerstuderende på fjerde semester. ' + 
        'Jeg er kreativ af natur, hvilket egentlig er den største grund til, hvorfor datamatikerfaget er lige mig: <br>') 
    );

    const divItalicText = createText('Her får jeg lov til at slå mig løs kreativt!<br>');
    divItalicText.classList.add('italics');

    contentGroup.appendChild(divItalicText);

    contentGroup.appendChild(createText(
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ') 
    );



  

    mainContentWrapper.insertBefore(contentGroup, document.getElementById('contact'));
    mainContentWrapper.insertBefore(createContentGroupBorder(), document.getElementById('contact'));
}



