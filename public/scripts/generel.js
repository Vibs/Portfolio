

/** 
 * small dotted border to separate sub-content-groups
*/
function createSmallBorder() {
    const border = document.createElement('div');
    border.classList.add('small-border');
    return border;
}

/** 
 * large dotted border to separate content-groups
*/
function createLargeBorder() {
    const border = document.createElement('div');
    border.classList.add('large-border', 'standard-margin');
    return border;
}

/**
 * content-group == a div with top and bottom padding
 * designed to group text or other content
*/
function createContentGroup() {
    const divContentGroup = document.createElement('div');
    divContentGroup.classList.add('content-group');
    return divContentGroup;
}


/** 
 * div with large, centered text
*/
const createHeadline = function createHeadline(text) {
    const divHeadline = document.createElement('div');
    divHeadline.classList.add('headline', 'flex-center', 'standard-margin');
    divHeadline.innerHTML = text + '&nbsp&nbsp <i class="fas fa-chevron-down"></i>';




    return divHeadline;
}


/** 
 * div with medium-sized, centered text
*/
const createSubheadline = function createSubheadline(text) {
    const divSubheadline = document.createElement('div');
    divSubheadline.classList.add('subheadline', 'flex-center', 'standard-margin');
    divSubheadline.innerHTML = text + '&nbsp&nbsp <i class="fas fa-chevron-down"></i>';

    return divSubheadline;
}

/** 
 * div with normal-sized but bold, centered text
*/
const createSubSubheadline = function createSubSubheadline(text) {
    const divSubheadline = document.createElement('div');
    divSubheadline.classList.add('sub-subheadline', 'flex-center');
    divSubheadline.innerHTML = text; // + '&nbsp&nbsp <i class="fas fa-chevron-down"></i>';

    return divSubheadline;
}

/** 
 * div for normal, centered text
*/
function createText(text) {
    const divText = document.createElement('div');

    divText.classList.add('text-block', 'flex-center', 'standard-margin');
    divText.innerHTML = text;

    return divText;
}

/**
 * bordered large button
 * so far only used in portfolio
*/
function createSubgroup(name, link) {
    const newSubgroup = document.createElement('a');
    newSubgroup.classList.add('subgroup', 'link', 'flex-center', 'headline');
    newSubgroup.href = link;
    newSubgroup.innerHTML = name;
    return newSubgroup;
}

/**
 
 
function createCodesnippet(text) {
    //wrapper-div which centers the code-snippet as it's only 80% width
    const divCodeWrapper = document.createElement('div');
    divCodeWrapper.classList.add('flex-center');

    //codesnippet
    const divCodeSnippet = document.createElement('div');
    divCodeSnippet.classList.add('code-block', 'code-color', 'text-block', 'content-group');
    divCodeSnippet.innerHTML = text;

    divCodeWrapper.appendChild(divCodeSnippet);
    return divCodeWrapper;
}
*/


function createCodesnippet(code, comment) {
    // wrapper-div which centers the code-snippet as it's only 80% width
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('flex-center');
    
    // div to create black box - which holds text
    const divCommandBox = document.createElement('div');
    divCommandBox.classList.add('code-background-color', 'code-block', 'text-block', 'content-group');
    
    // blue code
    const divCode = document.createElement('p');
    divCode.classList.add('code-blue-font');
    divCode.innerHTML = code;
    divCommandBox.appendChild(divCode);

    if(comment) {
        // grey comment
        const divComment = document.createElement('p');
        divComment.classList.add('code-grey-font', 'bottom');
        divComment.innerHTML = comment;
        divCommandBox.appendChild(divComment);
    }

    divWrapper.appendChild(divCommandBox);

    return divWrapper;
}

function createTerminalSnippet(command) {
    // wrapper-div which centers the code-snippet as it's only 80% width
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('flex-center');
    
    // div to create black box - which holds text
    const divCommandBox = document.createElement('div');
    divCommandBox.classList.add('terminal-background-color', 'code-block', 'text-block', 'vertical', 'content-group');
    
    // static white path preceding command
    const divPath = document.createElement('p');
    divPath.classList.add('terminal-white-font');
    divPath.innerHTML = 'PS C:Users\\vibe &nbsp'; // static

    // yellow command - from param
    const divCommand = document.createElement('p');
    divCommand.classList.add('terminal-yellow-font');
    divCommand.innerHTML = command;

    divCommandBox.appendChild(divPath);
    divCommandBox.appendChild(divCommand);

    divWrapper.appendChild(divCommandBox);

    return divWrapper;
}

/* */
function addSubgroup(mainContentWrapper, name, link) {
    const newSubgroup = document.createElement('a');
    newSubgroup.classList.add('subgroup', 'flex-center');
    newSubgroup.href = link;
    newSubgroup.innerHTML = name;

    // gets all content-group divs
    const allContentGroups = document.getElementsByClassName('content-group');
   
    let latestContentGroup; // var to hold content-group-element that new subgroup should be added to
    let newContentGroupNeeded = true; // bool that determines if a new content-group should be created

    // if there ARE any elements with the class content-group
    if(allContentGroups.length !== 0) {
        console.log("FØRSTE");
        // finds latest
        let latestContentGroup = allContentGroups[allContentGroups.length -1];
        // gets all subgroup divs in the latest content-group
        const allSubgroups = latestContentGroup.getElementsByClassName('subgroup');

        // if already 2 subgroups in the content-group (because I want 2 pr. line)
        if(allSubgroups.length < 2) {
            console.log("ANDEN");
            newContentGroupNeeded = false;
            latestContentGroup.appendChild(newSubgroup);
        }
    } 
  
    // is true if:
    //      1. there are NO elements with content-group class on page
    //      2. there already are two subgroups in the latest content-group
    if(newContentGroupNeeded) {
        console.log("new content group needed");
        // create new content-group
        latestContentGroup = createContentGroup();
        latestContentGroup.classList.add('flex-center');

        latestContentGroup.appendChild(newSubgroup);  // add to latestContentGroup
        mainContentWrapper.appendChild(latestContentGroup);  // adds new content-group to mainContentWrapper
    }
 
    

}
