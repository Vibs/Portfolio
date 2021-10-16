

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
    border.classList.add('large-border');
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
function createHeadline(text) {
    const divHeadline = document.createElement('div');
    divHeadline.classList.add('headline', 'flex-center');
    divHeadline.innerHTML = text;

    return divHeadline;
}

/** 
 * div with medium-sized, centered text
*/
function createSubheadline(text) {
    const divSubheadline = document.createElement('div');
    divSubheadline.classList.add('subheadline', 'flex-center');
    divSubheadline.innerHTML = text;

    return divSubheadline;
}

/** 
 * div with normal-sized but bold, centered text
*/
function createSubSubheadline(text) {
    const divSubheadline = document.createElement('div');
    divSubheadline.classList.add('sub-subheadline', 'flex-center');
    divSubheadline.innerHTML = text;

    return divSubheadline;
}

/** 
 * div for normal, centered text
*/
function createText(text) {
    const divText = document.createElement('div');

    divText.classList.add('text-block', 'flex-center');
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
 * 
 */
function createCodesnippet(text) {
    /*wrapper-div which centers the code-snippet as it's only 80% width*/
    const divCodeWrapper = document.createElement('div');
    divCodeWrapper.classList.add('flex-center');

    /*codesnippet*/
    const divCodeSnippet = document.createElement('div');
    divCodeSnippet.classList.add('blockquote', 'code-background', 'text-block', 'content-group');
    divCodeSnippet.innerHTML = text;

    divCodeWrapper.appendChild(divCodeSnippet);
    return divCodeWrapper;

}


