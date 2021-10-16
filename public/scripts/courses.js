let mainContentWrapper;

document.addEventListener('DOMContentLoaded', function () {
    mainContentWrapper = document.getElementById('main-content-wrapper');
    addNodeSection();
});


// NODE.js
function addNodeSection() {

    //+ overall content-group
    const contentGroup = createContentGroup();
    contentGroup.appendChild(createHeadline('Node.js')); // Adds headline

    //+ week 35 sub-content-group
    const week35ContentGroup = createContentGroup();
    week35ContentGroup.appendChild(createSubheadline('Uge 35')) // subheadline

 
    week35ContentGroup.appendChild(createSubSubheadline(
        'Spændende tekst om node') 
    );

    week35ContentGroup.appendChild(createText(
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ') 
    );

    week35ContentGroup.appendChild(createCodesnippet(
        'Hej dette er code <br> <tb> mere'));





    // adds content-group with all the content
    contentGroup.appendChild(week35ContentGroup);
    mainContentWrapper.appendChild(contentGroup);
    // mainContentWrapper.insertBefore(createLargeBorder(), document.getElementById('contact'));
}

// Python
function addPythonSection() {
    // outer-div for content
    const contentGroup = createContentGroup();

    contentGroup.appendChild(createHeadline('Python')); // adds headline to outer div
    contentGroup.appendChild(createSubheadline('Dette er en subheadline'));

    contentGroup.appendChild(createText(
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ' + 
        'Mega spændende info omkring mig ') 
    );

    mainContentWrapper.appendChild(contentGroup);
}


