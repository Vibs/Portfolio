

function createContentGroupBorder() {
    const border = document.createElement('div');
    border.classList.add('content-group-border');
    return border;
}

function createContentGroup() {
    const divContentGroup = document.createElement('div');
    divContentGroup.classList.add('content-group');
    return divContentGroup;
}

function addHeadline(text, elementToAddHeadlineTo) {
    const divHeadline = document.createElement('div');
    divHeadline.classList.add('headline', 'flex-center');
    divHeadline.innerHTML = text;

    elementToAddHeadlineTo.appendChild(divHeadline);
}

function addText(text, elementToAddTextTo) {
    const divText = document.createElement('div');
    divText.classList.add('text');
    divText.innerHTML = text;

    elementToAddTextTo.appendChild(divText);
}


